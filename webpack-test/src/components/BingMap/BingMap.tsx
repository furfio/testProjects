import React, { useRef } from 'react'
import { bingMapService } from './BingMapService';

const initMap = async () => {
    await bingMapService.init();
}

function runRetry(
    task: () => boolean,
    interval: number,
    maxTimes: number
  ): void {
    let count = 0;
    const trier = setInterval(() => {
      count += 1;
      let taskSuccess = false;
  
      try {
        taskSuccess = task();
      } catch (e) {
        console.log("Retry task throw exception");
      }
  
      if (taskSuccess || count >= maxTimes) {
        clearInterval(trier);
      }
    }, interval);
  }

class BingMap extends React.Component {
    private divRef = React.createRef<HTMLDivElement>();
    private bingMap: Microsoft.Maps.Map | undefined = undefined;

    constructor(props: any) {
        super(props);
    }

    public componentDidMount(): void {
        initMap().then(() => {
            console.log('bingmap script loaded!');
            const options: Microsoft.Maps.IMapLoadOptions = {
                allowHidingLabelsOfRoad: true,
                showLocateMeButton: true,
                showMapTypeSelector: false,
                showScalebar: false,
                showTermsLink: false,
                showLogo: false,
                zoom: 1,
                credentials: ''
            };
            const task = (): boolean => {
                try {
                    this.bingMap = bingMapService.tryCreateMap(this.divRef.current as HTMLElement, options);
                }catch {
                    console.log('loading map!')
                }
                return !!this.bingMap;
              };
        
              runRetry(task, 500, 10);
        });
    }


    public render(): React.ReactNode {
        return (
            <div>
                <div ref={this.divRef} style={{width: '50vw', height: '30vh'}}>

                </div>
            </div>
        )
    }
}

export default BingMap;