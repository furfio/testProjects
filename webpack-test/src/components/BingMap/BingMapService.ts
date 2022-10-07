export class BingMapService {

    public init(){
        const scriptUrl =
        "https://www.bing.com/api/maps/mapcontrol?key=Ag82N8XZ01BGCkFLok1OZur5ZvurCRK2TNn8r8CIu7ZWX73fsSN_JyRpLNXT5vLg";
        // AksOASfzdybmndjlOxhWnhZaNtzG5CMgqUFIgB5Ji8W6Gr748WQL5mijk5w4OmDD
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.defer = true;
        script.src = scriptUrl;
        script.setAttribute("data-map-key", "Ag82N8XZ01BGCkFLok1OZur5ZvurCRK2TNn8r8CIu7ZWX73fsSN_JyRpLNXT5vLg"); // for test
        script.onerror = (
          event: Event | string,
          source?: string,
          lineno?: number,
          colno?: number,
          error?: Error
        ): void => {
          console.error("Loading Bing map script failed.", error);
        };
    
        document.body.appendChild(script);
    }

    public tryCreateMap(
        mapContainer: HTMLElement,
        options: Microsoft.Maps.IMapLoadOptions
    ): Microsoft.Maps.Map | undefined {
        return new Microsoft.Maps.Map(mapContainer, options);
    }
}

export const bingMapService = new BingMapService();