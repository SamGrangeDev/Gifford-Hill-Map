ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([15491968.886706, -4188812.316768, 15508359.730054, -4180343.363690]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_GiffordHillConceptMasterplan_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Gifford Hill Concept Masterplan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GiffordHillConceptMasterplan_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15494604.351000, -4187033.217900, 15503919.598900, -4182344.731800]
                            })
                        });
var lyr_GHConceptMasterplanPrecinct1A_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "GH Concept Masterplan Precinct 1A",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GHConceptMasterplanPrecinct1A_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15500457.765700, -4186013.118600, 15502679.690200, -4183405.822000]
                            })
                        });
var format_MasterplanSubPrecint1BBoundary_4 = new ol.format.GeoJSON();
var features_MasterplanSubPrecint1BBoundary_4 = format_MasterplanSubPrecint1BBoundary_4.readFeatures(json_MasterplanSubPrecint1BBoundary_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasterplanSubPrecint1BBoundary_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplanSubPrecint1BBoundary_4.addFeatures(features_MasterplanSubPrecint1BBoundary_4);
var lyr_MasterplanSubPrecint1BBoundary_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplanSubPrecint1BBoundary_4, 
                style: style_MasterplanSubPrecint1BBoundary_4,
                popuplayertitle: "Masterplan Sub-Precint 1B Boundary",
                interactive: false,
                title: '<img src="styles/legend/MasterplanSubPrecint1BBoundary_4.png" /> Masterplan Sub-Precint 1B Boundary'
            });
var format_Zoning_5 = new ol.format.GeoJSON();
var features_Zoning_5 = format_Zoning_5.readFeatures(json_Zoning_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoning_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoning_5.addFeatures(features_Zoning_5);
var lyr_Zoning_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoning_5, 
                style: style_Zoning_5,
                popuplayertitle: "Zoning",
                interactive: true,
    title: 'Zoning<br />\
    <img src="styles/legend/Zoning_5_0.png" /> Activity Centre<br />\
    <img src="styles/legend/Zoning_5_1.png" /> Conservation<br />\
    <img src="styles/legend/Zoning_5_2.png" /> Masterplanned Neighborhood<br />\
    <img src="styles/legend/Zoning_5_3.png" /> Recreation<br />\
    <img src="styles/legend/Zoning_5_4.png" /> Rural<br />\
    <img src="styles/legend/Zoning_5_5.png" /> Rural Living<br />'
        });
var format_ProjectOwned_Parcels_6 = new ol.format.GeoJSON();
var features_ProjectOwned_Parcels_6 = format_ProjectOwned_Parcels_6.readFeatures(json_ProjectOwned_Parcels_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectOwned_Parcels_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectOwned_Parcels_6.addFeatures(features_ProjectOwned_Parcels_6);
var lyr_ProjectOwned_Parcels_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectOwned_Parcels_6, 
                style: style_ProjectOwned_Parcels_6,
                popuplayertitle: "Project Owned_Parcels",
                interactive: true,
                title: '<img src="styles/legend/ProjectOwned_Parcels_6.png" /> Project Owned_Parcels'
            });
var format_GiffordHillParcelBoundary_7 = new ol.format.GeoJSON();
var features_GiffordHillParcelBoundary_7 = format_GiffordHillParcelBoundary_7.readFeatures(json_GiffordHillParcelBoundary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GiffordHillParcelBoundary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiffordHillParcelBoundary_7.addFeatures(features_GiffordHillParcelBoundary_7);
var lyr_GiffordHillParcelBoundary_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiffordHillParcelBoundary_7, 
                style: style_GiffordHillParcelBoundary_7,
                popuplayertitle: "Gifford Hill Parcel Boundary",
                interactive: true,
                title: '<img src="styles/legend/GiffordHillParcelBoundary_7.png" /> Gifford Hill Parcel Boundary'
            });
var group_Masterplans = new ol.layer.Group({
                                layers: [lyr_GiffordHillConceptMasterplan_2,lyr_GHConceptMasterplanPrecinct1A_3,lyr_MasterplanSubPrecint1BBoundary_4,],
                                fold: "open",
                                title: "Masterplans"});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layer"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_GiffordHillConceptMasterplan_2.setVisible(false);lyr_GHConceptMasterplanPrecinct1A_3.setVisible(false);lyr_MasterplanSubPrecint1BBoundary_4.setVisible(false);lyr_Zoning_5.setVisible(false);lyr_ProjectOwned_Parcels_6.setVisible(true);lyr_GiffordHillParcelBoundary_7.setVisible(true);
var layersList = [group_BaseLayer,group_Masterplans,lyr_Zoning_5,lyr_ProjectOwned_Parcels_6,lyr_GiffordHillParcelBoundary_7];
lyr_MasterplanSubPrecint1BBoundary_4.set('fieldAliases', {'id': 'id', });
lyr_Zoning_5.set('fieldAliases', {'id': 'id', 'Land use': 'Land use', });
lyr_ProjectOwned_Parcels_6.set('fieldAliases', {'Address': 'Address', 'Zoning': 'Zoning', 'Options': 'Options', });
lyr_GiffordHillParcelBoundary_7.set('fieldAliases', {'fid': 'fid', 'Address': 'Address', 'Gross_Ha': 'Gross_Ha', 'Zoning': 'Zoning', 'Gifford Hill Lands': 'Gifford Hill Lands', 'NDH': 'NDH', });
lyr_MasterplanSubPrecint1BBoundary_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Zoning_5.set('fieldImages', {'id': 'TextEdit', 'Land use': 'TextEdit', });
lyr_ProjectOwned_Parcels_6.set('fieldImages', {'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Options': 'TextEdit', });
lyr_GiffordHillParcelBoundary_7.set('fieldImages', {'fid': 'TextEdit', 'Address': 'TextEdit', 'Gross_Ha': 'TextEdit', 'Zoning': 'TextEdit', 'Gifford Hill Lands': 'TextEdit', 'NDH': 'TextEdit', });
lyr_MasterplanSubPrecint1BBoundary_4.set('fieldLabels', {'id': 'hidden field', });
lyr_Zoning_5.set('fieldLabels', {'id': 'hidden field', 'Land use': 'inline label - visible with data', });
lyr_ProjectOwned_Parcels_6.set('fieldLabels', {'Address': 'hidden field', 'Zoning': 'hidden field', 'Options': 'inline label - visible with data', });
lyr_GiffordHillParcelBoundary_7.set('fieldLabels', {'fid': 'hidden field', 'Address': 'inline label - visible with data', 'Gross_Ha': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gifford Hill Lands': 'hidden field', 'NDH': 'inline label - visible with data', });
lyr_GiffordHillParcelBoundary_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});