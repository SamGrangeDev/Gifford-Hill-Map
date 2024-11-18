ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([15494587.309884, -4188472.184388, 15504119.604167, -4182771.220868]);
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
var lyr_MurrayBridgeStructurePlan_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Murray Bridge Structure Plan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MurrayBridgeStructurePlan_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15494398.507390, -4187495.701158, 15509257.176222, -4175611.682416]
                            })
                        });
var lyr_GiffordHillConceptMasterplan_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Gifford Hill Concept Masterplan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GiffordHillConceptMasterplan_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15494604.351000, -4187033.217900, 15503919.598900, -4182344.731800]
                            })
                        });
var lyr_GHConceptMasterplanPrecinct1A_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "GH Concept Masterplan Precinct 1A",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GHConceptMasterplanPrecinct1A_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15500457.765700, -4186013.118600, 15502679.690200, -4183405.822000]
                            })
                        });
var format_Masterplansubprecinct_1B_5 = new ol.format.GeoJSON();
var features_Masterplansubprecinct_1B_5 = format_Masterplansubprecinct_1B_5.readFeatures(json_Masterplansubprecinct_1B_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masterplansubprecinct_1B_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masterplansubprecinct_1B_5.addFeatures(features_Masterplansubprecinct_1B_5);
var lyr_Masterplansubprecinct_1B_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masterplansubprecinct_1B_5, 
                style: style_Masterplansubprecinct_1B_5,
                popuplayertitle: "Masterplan sub precinct_1B",
                interactive: false,
                title: '<img src="styles/legend/Masterplansubprecinct_1B_5.png" /> Masterplan sub precinct_1B'
            });
var format_Affordablehousing_6 = new ol.format.GeoJSON();
var features_Affordablehousing_6 = format_Affordablehousing_6.readFeatures(json_Affordablehousing_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Affordablehousing_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Affordablehousing_6.addFeatures(features_Affordablehousing_6);
var lyr_Affordablehousing_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Affordablehousing_6, 
                style: style_Affordablehousing_6,
                popuplayertitle: "Affordable housing",
                interactive: false,
                title: '<img src="styles/legend/Affordablehousing_6.png" /> Affordable housing'
            });
var format_EnvironmentandFoodProductionArea_7 = new ol.format.GeoJSON();
var features_EnvironmentandFoodProductionArea_7 = format_EnvironmentandFoodProductionArea_7.readFeatures(json_EnvironmentandFoodProductionArea_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnvironmentandFoodProductionArea_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnvironmentandFoodProductionArea_7.addFeatures(features_EnvironmentandFoodProductionArea_7);
var lyr_EnvironmentandFoodProductionArea_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnvironmentandFoodProductionArea_7, 
                style: style_EnvironmentandFoodProductionArea_7,
                popuplayertitle: "Environment and Food Production Area",
                interactive: false,
                title: '<img src="styles/legend/EnvironmentandFoodProductionArea_7.png" /> Environment and Food Production Area'
            });
var format_GasandLiquidPetroleumPipelines_8 = new ol.format.GeoJSON();
var features_GasandLiquidPetroleumPipelines_8 = format_GasandLiquidPetroleumPipelines_8.readFeatures(json_GasandLiquidPetroleumPipelines_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GasandLiquidPetroleumPipelines_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GasandLiquidPetroleumPipelines_8.addFeatures(features_GasandLiquidPetroleumPipelines_8);
var lyr_GasandLiquidPetroleumPipelines_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GasandLiquidPetroleumPipelines_8, 
                style: style_GasandLiquidPetroleumPipelines_8,
                popuplayertitle: "Gas and Liquid Petroleum Pipelines",
                interactive: false,
                title: '<img src="styles/legend/GasandLiquidPetroleumPipelines_8.png" /> Gas and Liquid Petroleum Pipelines'
            });
var format_HazardsBushfireGeneralRisk_9 = new ol.format.GeoJSON();
var features_HazardsBushfireGeneralRisk_9 = format_HazardsBushfireGeneralRisk_9.readFeatures(json_HazardsBushfireGeneralRisk_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HazardsBushfireGeneralRisk_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HazardsBushfireGeneralRisk_9.addFeatures(features_HazardsBushfireGeneralRisk_9);
var lyr_HazardsBushfireGeneralRisk_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HazardsBushfireGeneralRisk_9, 
                style: style_HazardsBushfireGeneralRisk_9,
                popuplayertitle: "Hazards Bushfire General Risk",
                interactive: false,
                title: '<img src="styles/legend/HazardsBushfireGeneralRisk_9.png" /> Hazards Bushfire General Risk'
            });
var format_HazardsBushfireMediumRisk_10 = new ol.format.GeoJSON();
var features_HazardsBushfireMediumRisk_10 = format_HazardsBushfireMediumRisk_10.readFeatures(json_HazardsBushfireMediumRisk_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HazardsBushfireMediumRisk_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HazardsBushfireMediumRisk_10.addFeatures(features_HazardsBushfireMediumRisk_10);
var lyr_HazardsBushfireMediumRisk_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HazardsBushfireMediumRisk_10, 
                style: style_HazardsBushfireMediumRisk_10,
                popuplayertitle: "Hazards Bushfire Medium Risk",
                interactive: false,
                title: '<img src="styles/legend/HazardsBushfireMediumRisk_10.png" /> Hazards Bushfire Medium Risk'
            });
var format_LimitedLandDivision_11 = new ol.format.GeoJSON();
var features_LimitedLandDivision_11 = format_LimitedLandDivision_11.readFeatures(json_LimitedLandDivision_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedLandDivision_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedLandDivision_11.addFeatures(features_LimitedLandDivision_11);
var lyr_LimitedLandDivision_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedLandDivision_11, 
                style: style_LimitedLandDivision_11,
                popuplayertitle: "Limited Land Division",
                interactive: false,
                title: '<img src="styles/legend/LimitedLandDivision_11.png" /> Limited Land Division'
            });
var format_MajorUrbanTransportRoutes_12 = new ol.format.GeoJSON();
var features_MajorUrbanTransportRoutes_12 = format_MajorUrbanTransportRoutes_12.readFeatures(json_MajorUrbanTransportRoutes_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorUrbanTransportRoutes_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorUrbanTransportRoutes_12.addFeatures(features_MajorUrbanTransportRoutes_12);
var lyr_MajorUrbanTransportRoutes_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorUrbanTransportRoutes_12, 
                style: style_MajorUrbanTransportRoutes_12,
                popuplayertitle: "Major Urban Transport Routes",
                interactive: false,
                title: '<img src="styles/legend/MajorUrbanTransportRoutes_12.png" /> Major Urban Transport Routes'
            });
var format_MurrayDarlingBasin_13 = new ol.format.GeoJSON();
var features_MurrayDarlingBasin_13 = format_MurrayDarlingBasin_13.readFeatures(json_MurrayDarlingBasin_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MurrayDarlingBasin_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MurrayDarlingBasin_13.addFeatures(features_MurrayDarlingBasin_13);
var lyr_MurrayDarlingBasin_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MurrayDarlingBasin_13, 
                style: style_MurrayDarlingBasin_13,
                popuplayertitle: "Murray Darling Basin",
                interactive: false,
                title: '<img src="styles/legend/MurrayDarlingBasin_13.png" /> Murray Darling Basin'
            });
var format_NativeVegetation_14 = new ol.format.GeoJSON();
var features_NativeVegetation_14 = format_NativeVegetation_14.readFeatures(json_NativeVegetation_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NativeVegetation_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NativeVegetation_14.addFeatures(features_NativeVegetation_14);
var lyr_NativeVegetation_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NativeVegetation_14, 
                style: style_NativeVegetation_14,
                popuplayertitle: "Native Vegetation",
                interactive: false,
                title: '<img src="styles/legend/NativeVegetation_14.png" /> Native Vegetation'
            });
var format_NoiseandAirEmissions_15 = new ol.format.GeoJSON();
var features_NoiseandAirEmissions_15 = format_NoiseandAirEmissions_15.readFeatures(json_NoiseandAirEmissions_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NoiseandAirEmissions_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NoiseandAirEmissions_15.addFeatures(features_NoiseandAirEmissions_15);
var lyr_NoiseandAirEmissions_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NoiseandAirEmissions_15, 
                style: style_NoiseandAirEmissions_15,
                popuplayertitle: "Noise and Air Emissions",
                interactive: false,
                title: '<img src="styles/legend/NoiseandAirEmissions_15.png" /> Noise and Air Emissions'
            });
var format_NonstopCorridor_16 = new ol.format.GeoJSON();
var features_NonstopCorridor_16 = format_NonstopCorridor_16.readFeatures(json_NonstopCorridor_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NonstopCorridor_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NonstopCorridor_16.addFeatures(features_NonstopCorridor_16);
var lyr_NonstopCorridor_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NonstopCorridor_16, 
                style: style_NonstopCorridor_16,
                popuplayertitle: "Non-stop Corridor",
                interactive: false,
                title: '<img src="styles/legend/NonstopCorridor_16.png" /> Non-stop Corridor'
            });
var format_PrescribedWaterResourcesArea_17 = new ol.format.GeoJSON();
var features_PrescribedWaterResourcesArea_17 = format_PrescribedWaterResourcesArea_17.readFeatures(json_PrescribedWaterResourcesArea_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrescribedWaterResourcesArea_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrescribedWaterResourcesArea_17.addFeatures(features_PrescribedWaterResourcesArea_17);
var lyr_PrescribedWaterResourcesArea_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrescribedWaterResourcesArea_17, 
                style: style_PrescribedWaterResourcesArea_17,
                popuplayertitle: "Prescribed Water Resources Area",
                interactive: false,
                title: '<img src="styles/legend/PrescribedWaterResourcesArea_17.png" /> Prescribed Water Resources Area'
            });
var format_SignificantLandscapeProtection_18 = new ol.format.GeoJSON();
var features_SignificantLandscapeProtection_18 = format_SignificantLandscapeProtection_18.readFeatures(json_SignificantLandscapeProtection_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignificantLandscapeProtection_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignificantLandscapeProtection_18.addFeatures(features_SignificantLandscapeProtection_18);
var lyr_SignificantLandscapeProtection_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SignificantLandscapeProtection_18, 
                style: style_SignificantLandscapeProtection_18,
                popuplayertitle: "Significant Landscape Protection",
                interactive: false,
                title: '<img src="styles/legend/SignificantLandscapeProtection_18.png" /> Significant Landscape Protection'
            });
var format_StateSignificantNativeVegetation_19 = new ol.format.GeoJSON();
var features_StateSignificantNativeVegetation_19 = format_StateSignificantNativeVegetation_19.readFeatures(json_StateSignificantNativeVegetation_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateSignificantNativeVegetation_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateSignificantNativeVegetation_19.addFeatures(features_StateSignificantNativeVegetation_19);
var lyr_StateSignificantNativeVegetation_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateSignificantNativeVegetation_19, 
                style: style_StateSignificantNativeVegetation_19,
                popuplayertitle: "State Significant Native Vegetation",
                interactive: false,
                title: '<img src="styles/legend/StateSignificantNativeVegetation_19.png" /> State Significant Native Vegetation'
            });
var format_TrafficGeneratingDevelopment_20 = new ol.format.GeoJSON();
var features_TrafficGeneratingDevelopment_20 = format_TrafficGeneratingDevelopment_20.readFeatures(json_TrafficGeneratingDevelopment_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrafficGeneratingDevelopment_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrafficGeneratingDevelopment_20.addFeatures(features_TrafficGeneratingDevelopment_20);
var lyr_TrafficGeneratingDevelopment_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrafficGeneratingDevelopment_20, 
                style: style_TrafficGeneratingDevelopment_20,
                popuplayertitle: "Traffic Generating Development",
                interactive: false,
                title: '<img src="styles/legend/TrafficGeneratingDevelopment_20.png" /> Traffic Generating Development'
            });
var format_WaterResources_21 = new ol.format.GeoJSON();
var features_WaterResources_21 = format_WaterResources_21.readFeatures(json_WaterResources_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterResources_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterResources_21.addFeatures(features_WaterResources_21);
var lyr_WaterResources_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterResources_21, 
                style: style_WaterResources_21,
                popuplayertitle: "Water Resources",
                interactive: false,
                title: '<img src="styles/legend/WaterResources_21.png" /> Water Resources'
            });
var format_AdelaideHillsWasteManagementAuthorityBuffer_22 = new ol.format.GeoJSON();
var features_AdelaideHillsWasteManagementAuthorityBuffer_22 = format_AdelaideHillsWasteManagementAuthorityBuffer_22.readFeatures(json_AdelaideHillsWasteManagementAuthorityBuffer_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdelaideHillsWasteManagementAuthorityBuffer_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdelaideHillsWasteManagementAuthorityBuffer_22.addFeatures(features_AdelaideHillsWasteManagementAuthorityBuffer_22);
var lyr_AdelaideHillsWasteManagementAuthorityBuffer_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdelaideHillsWasteManagementAuthorityBuffer_22, 
                style: style_AdelaideHillsWasteManagementAuthorityBuffer_22,
                popuplayertitle: "Adelaide Hills Waste Management Authority Buffer",
                interactive: true,
                title: '<img src="styles/legend/AdelaideHillsWasteManagementAuthorityBuffer_22.png" /> Adelaide Hills Waste Management Authority Buffer'
            });
var format_Zoning_23 = new ol.format.GeoJSON();
var features_Zoning_23 = format_Zoning_23.readFeatures(json_Zoning_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoning_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoning_23.addFeatures(features_Zoning_23);
var lyr_Zoning_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoning_23, 
                style: style_Zoning_23,
                popuplayertitle: "Zoning",
                interactive: true,
    title: 'Zoning<br />\
    <img src="styles/legend/Zoning_23_0.png" /> Activity Centre<br />\
    <img src="styles/legend/Zoning_23_1.png" /> Conservation<br />\
    <img src="styles/legend/Zoning_23_2.png" /> Masterplanned Neighborhood<br />\
    <img src="styles/legend/Zoning_23_3.png" /> Recreation<br />\
    <img src="styles/legend/Zoning_23_4.png" /> Rural<br />\
    <img src="styles/legend/Zoning_23_5.png" /> Rural Living<br />'
        });
var lyr_WWTF_Potable_Basins_24 = new ol.layer.Image({
                            opacity: 1,
                            title: "WWTF_Potable_Basins",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/WWTF_Potable_Basins_24.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15499528.537500, -4187868.838100, 15501376.354500, -4186945.897100]
                            })
                        });
var format_ProjectOwnedParcels_25 = new ol.format.GeoJSON();
var features_ProjectOwnedParcels_25 = format_ProjectOwnedParcels_25.readFeatures(json_ProjectOwnedParcels_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectOwnedParcels_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectOwnedParcels_25.addFeatures(features_ProjectOwnedParcels_25);
var lyr_ProjectOwnedParcels_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectOwnedParcels_25, 
                style: style_ProjectOwnedParcels_25,
                popuplayertitle: "Project Owned Parcels",
                interactive: true,
                title: '<img src="styles/legend/ProjectOwnedParcels_25.png" /> Project Owned Parcels'
            });
var format_GiffordHillParcelBoundary_26 = new ol.format.GeoJSON();
var features_GiffordHillParcelBoundary_26 = format_GiffordHillParcelBoundary_26.readFeatures(json_GiffordHillParcelBoundary_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GiffordHillParcelBoundary_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiffordHillParcelBoundary_26.addFeatures(features_GiffordHillParcelBoundary_26);
var lyr_GiffordHillParcelBoundary_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiffordHillParcelBoundary_26, 
                style: style_GiffordHillParcelBoundary_26,
                popuplayertitle: "Gifford Hill Parcel Boundary",
                interactive: true,
                title: '<img src="styles/legend/GiffordHillParcelBoundary_26.png" /> Gifford Hill Parcel Boundary'
            });
var group_Overlay = new ol.layer.Group({
                                layers: [lyr_Affordablehousing_6,lyr_EnvironmentandFoodProductionArea_7,lyr_GasandLiquidPetroleumPipelines_8,lyr_HazardsBushfireGeneralRisk_9,lyr_HazardsBushfireMediumRisk_10,lyr_LimitedLandDivision_11,lyr_MajorUrbanTransportRoutes_12,lyr_MurrayDarlingBasin_13,lyr_NativeVegetation_14,lyr_NoiseandAirEmissions_15,lyr_NonstopCorridor_16,lyr_PrescribedWaterResourcesArea_17,lyr_SignificantLandscapeProtection_18,lyr_StateSignificantNativeVegetation_19,lyr_TrafficGeneratingDevelopment_20,lyr_WaterResources_21,lyr_AdelaideHillsWasteManagementAuthorityBuffer_22,],
                                fold: "open",
                                title: "Overlay"});
var group_Masterplans = new ol.layer.Group({
                                layers: [lyr_MurrayBridgeStructurePlan_2,lyr_GiffordHillConceptMasterplan_3,lyr_GHConceptMasterplanPrecinct1A_4,lyr_Masterplansubprecinct_1B_5,],
                                fold: "open",
                                title: "Masterplans"});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: "Base Layer"});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_MurrayBridgeStructurePlan_2.setVisible(false);lyr_GiffordHillConceptMasterplan_3.setVisible(false);lyr_GHConceptMasterplanPrecinct1A_4.setVisible(false);lyr_Masterplansubprecinct_1B_5.setVisible(false);lyr_Affordablehousing_6.setVisible(false);lyr_EnvironmentandFoodProductionArea_7.setVisible(false);lyr_GasandLiquidPetroleumPipelines_8.setVisible(false);lyr_HazardsBushfireGeneralRisk_9.setVisible(false);lyr_HazardsBushfireMediumRisk_10.setVisible(false);lyr_LimitedLandDivision_11.setVisible(false);lyr_MajorUrbanTransportRoutes_12.setVisible(false);lyr_MurrayDarlingBasin_13.setVisible(false);lyr_NativeVegetation_14.setVisible(false);lyr_NoiseandAirEmissions_15.setVisible(false);lyr_NonstopCorridor_16.setVisible(false);lyr_PrescribedWaterResourcesArea_17.setVisible(false);lyr_SignificantLandscapeProtection_18.setVisible(false);lyr_StateSignificantNativeVegetation_19.setVisible(false);lyr_TrafficGeneratingDevelopment_20.setVisible(false);lyr_WaterResources_21.setVisible(false);lyr_AdelaideHillsWasteManagementAuthorityBuffer_22.setVisible(false);lyr_Zoning_23.setVisible(false);lyr_WWTF_Potable_Basins_24.setVisible(false);lyr_ProjectOwnedParcels_25.setVisible(true);lyr_GiffordHillParcelBoundary_26.setVisible(true);
var layersList = [group_BaseLayer,group_Masterplans,group_Overlay,lyr_Zoning_23,lyr_WWTF_Potable_Basins_24,lyr_ProjectOwnedParcels_25,lyr_GiffordHillParcelBoundary_26];
lyr_Masterplansubprecinct_1B_5.set('fieldAliases', {'id': 'id', });
lyr_Affordablehousing_6.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_EnvironmentandFoodProductionArea_7.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_GasandLiquidPetroleumPipelines_8.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_HazardsBushfireGeneralRisk_9.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_HazardsBushfireMediumRisk_10.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_LimitedLandDivision_11.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_MajorUrbanTransportRoutes_12.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_MurrayDarlingBasin_13.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_NativeVegetation_14.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_NoiseandAirEmissions_15.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_NonstopCorridor_16.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_PrescribedWaterResourcesArea_17.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_SignificantLandscapeProtection_18.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_StateSignificantNativeVegetation_19.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_TrafficGeneratingDevelopment_20.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_WaterResources_21.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'Legal Start Date', 'legalenddate': 'Legal End Date', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'System Start Date', 'systemenddate': 'System End Date', });
lyr_AdelaideHillsWasteManagementAuthorityBuffer_22.set('fieldAliases', {'id': 'id', 'Character': 'Character', });
lyr_Zoning_23.set('fieldAliases', {'id': 'id', 'Land use': 'Land use', });
lyr_ProjectOwnedParcels_25.set('fieldAliases', {'Address': 'Address', 'Zoning': 'Zoning', 'Options': 'Options', });
lyr_GiffordHillParcelBoundary_26.set('fieldAliases', {'fid': 'fid', 'Address': 'Address', 'Gross_Ha': 'Gross_Ha', 'Zoning': 'Zoning', 'Gifford Hill Lands': 'Gifford Hill Lands', 'NDH': 'NDH', });
lyr_Masterplansubprecinct_1B_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Affordablehousing_6.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_EnvironmentandFoodProductionArea_7.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_GasandLiquidPetroleumPipelines_8.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_HazardsBushfireGeneralRisk_9.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_HazardsBushfireMediumRisk_10.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_LimitedLandDivision_11.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_MajorUrbanTransportRoutes_12.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_MurrayDarlingBasin_13.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_NativeVegetation_14.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_NoiseandAirEmissions_15.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_NonstopCorridor_16.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_PrescribedWaterResourcesArea_17.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_SignificantLandscapeProtection_18.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_StateSignificantNativeVegetation_19.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_TrafficGeneratingDevelopment_20.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_WaterResources_21.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'DateTime', 'status': 'Range', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'DateTime', });
lyr_AdelaideHillsWasteManagementAuthorityBuffer_22.set('fieldImages', {'id': 'TextEdit', 'Character': '', });
lyr_Zoning_23.set('fieldImages', {'id': 'TextEdit', 'Land use': 'TextEdit', });
lyr_ProjectOwnedParcels_25.set('fieldImages', {'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Options': 'TextEdit', });
lyr_GiffordHillParcelBoundary_26.set('fieldImages', {'fid': 'TextEdit', 'Address': 'TextEdit', 'Gross_Ha': 'TextEdit', 'Zoning': 'TextEdit', 'Gifford Hill Lands': 'TextEdit', 'NDH': 'TextEdit', });
lyr_Masterplansubprecinct_1B_5.set('fieldLabels', {'id': 'hidden field', });
lyr_Affordablehousing_6.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_EnvironmentandFoodProductionArea_7.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_GasandLiquidPetroleumPipelines_8.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_HazardsBushfireGeneralRisk_9.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_HazardsBushfireMediumRisk_10.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_LimitedLandDivision_11.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_MajorUrbanTransportRoutes_12.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_MurrayDarlingBasin_13.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_NativeVegetation_14.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_NoiseandAirEmissions_15.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_NonstopCorridor_16.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_PrescribedWaterResourcesArea_17.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_SignificantLandscapeProtection_18.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_StateSignificantNativeVegetation_19.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_TrafficGeneratingDevelopment_20.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_WaterResources_21.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'id': 'no label', 'name': 'no label', 'description': 'no label', 'value': 'no label', 'legalstartdate': 'no label', 'legalenddate': 'no label', 'status': 'no label', 'st_area(shape)': 'no label', 'st_perimeter(shape)': 'no label', 'systemstartdate': 'no label', 'systemenddate': 'no label', });
lyr_AdelaideHillsWasteManagementAuthorityBuffer_22.set('fieldLabels', {'id': 'hidden field', 'Character': 'inline label - always visible', });
lyr_Zoning_23.set('fieldLabels', {'id': 'hidden field', 'Land use': 'inline label - visible with data', });
lyr_ProjectOwnedParcels_25.set('fieldLabels', {'Address': 'hidden field', 'Zoning': 'hidden field', 'Options': 'inline label - visible with data', });
lyr_GiffordHillParcelBoundary_26.set('fieldLabels', {'fid': 'hidden field', 'Address': 'inline label - visible with data', 'Gross_Ha': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gifford Hill Lands': 'hidden field', 'NDH': 'inline label - visible with data', });
lyr_GiffordHillParcelBoundary_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});