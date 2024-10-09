/**
 * People Map JS
 *
 * Plots people data on a map.
*/

document.addEventListener("DOMContentLoaded", function() {
    // Initialize and add the map.
    let map;

    async function initMap() {
        // Request needed libraries.
        const { Map } = await google.maps.importLibrary( "maps" );
        const { AdvancedMarkerView } = await google.maps.importLibrary( "marker" );
        const infoWindow = new google.maps.InfoWindow(
            {
                content: "",
                disableAutoPan: true,
            }
        );
        map = new Map(
            document.getElementById( "map" ),
            {
                zoom: 2,
                center: new google.maps.LatLng( 20.312269132769966, 6.947682816594525 ),
                mapId: "DEMO_MAP_ID",
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false
                }
            );

        const peopleObj = JSON.parse( people );
        const min = .999;
        const max = 1.001;
        const markers = [];
        const renderer = {
            render: ( { count, position } ) =>

            new google.maps.Marker(
                {
                    label: { text: String( count ), color: "#fff", fontSize: "14px", fontWeight: "600", fontFamily: "Clarity City" },
                    icon: {
                        url: `data:image/svg+xml,%3Csvg fill='%23000' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 240'%3E%3Ccircle cx='120' cy='120' opacity='.7' r='110' /%3E%3C/svg%3E`,
                        scaledSize: new google.maps.Size( 45, 45 ),
                    },
                    position,
                    // adjust zIndex to be above other markers.
                    zIndex: Number( google.maps.Marker.MAX_ZINDEX ) + count,
                }
            )

        };

        Object.keys(peopleObj).forEach(key => {
            // adds some randomness to the positioning so that markers on same city don't overlap.
            let lat = peopleObj[key]['lat'] * (Math.random() * (max - min) + min);
            let lng = peopleObj[key]['lng'] * (Math.random() * (max - min) + min);

            const latLng = new google.maps.LatLng( lat, lng );

            const marker = new google.maps.Marker(
                {
                    position: latLng,
                    icon: '/img/person.svg',
                }
            );

            const popup = '<button data-modal-content-id="modal-' + peopleObj[key]['id'] + '" data-modal-slug="' + peopleObj[key]['slug'] + '" data-modal-prefix-class="person" class="js-modal button-reset map-button modal-' + peopleObj[key]['slug'] + '" aria-haspopup="dialog">' + peopleObj[key]['name'] + '</button>';
            marker.addListener(
                "click",
                () => {
                    infoWindow.close();
                    infoWindow.setContent( popup );
                    infoWindow.open(
                    {
                        anchor: marker,
                        map,
                    }
                    );
                }
            );

            markers.push( marker );
        });

        new markerClusterer.MarkerClusterer( { markers, map, renderer } );
    }
    initMap();
}
);
