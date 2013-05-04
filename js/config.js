/** @license
 | Version 10.2
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
dojo.provide("js.config");
dojo.declare("js.config", null, {

    // This file contains various configuration settings for "Election Results" template
    //
    // Use this file to perform the following:
    //
    // 1.  Specify application title                  - [ Tag(s) to look for: ApplicationName ]
    // 2.  Set path for application icon              - [ Tag(s) to look for: ApplicationIcon ]
    // 3.  Set splash screen message                  - [ Tag(s) to look for: SplashScreenMessage ]
    // 4.  Set URL for help page                      - [ Tag(s) to look for: HelpURL ]
    //
    // 5.  Specify URL(s) for basemaps                - [ Tag(s) to look for: BaseMapLayers ]
    // 6.  Set initial map extent                     - [ Tag(s) to look for: DefaultExtent ]
    //
    // 7.  Choose to use WebMap or map services       - [ Tag(s) to look for: UseWebmap <true/false> ]
    // 8.  Specify WebMapId, if using WebMap          - [ Tag(s) to look for: WebMapId ]
    // 9.  Or for using map services:
    // 9a. Specify URL(s) for operational and overlay layers
    //                                                - [ Tag(s) to look for: PrecinctLayer, ReferenceOverlayLayer]
    // 9b. Customize data formatting                  - [ Tag(s) to look for: ShowNullValueAs]
    //
    // 10. Customize address search settings          - [ Tag(s) to look for: LocatorSettings]
    //
    // 11. Set URL for geometry service               - [ Tag(s) to look for: GeometryService ]
    //
    // 12. Configure data to be displayed on the bottom panel
    //                                                - [ Tag(s) to look for: InfoBoxWidth, ElectionResultData, ColorCodeOfParties, VotedColor, DidNotVoteColor]
    //
    // 13. Configure data to be displayed for election updates
    //                                                - [Tag(s) to look for: Updates]
    // 14. Specify URLs for map sharing               - [ Tag(s) to look for: FacebookShareURL, TwitterShareURL, ShareByMailLink ]
    // 15a.In case of changing the TinyURL service
    //     Specify URL for the new service            - [ Tag(s) to look for: MapSharingOptions (set TinyURLServiceURL, TinyURLResponseAttribute) ]
    //
    //

    // ------------------------------------------------------------------------------------------------------------------------
    // GENERAL SETTINGS
    // -----------------------------------------------------------------------------------------------------------------------
    // Set application title
    ApplicationName: "Election Results",

    // Set application icon path
    ApplicationIcon: "images/logo.png",

    // Set splash window content - Message that appears when the application starts
    SplashScreenMessage: "<b>Election Results</b> <br/> <hr/> <br/> The <b>Election Results</b> application provides election results information to the general public and other interested parties. It offers a map-based view of results tabulated on election night and allows users to review these results for a specific precinct or political contest. To review election results, simply enter an address or voting precinct in the search box.  The precinct will then be highlighted on the map and results for each political contest displayed in a tab along the bottom of the map. <br/><br/>",

    // Set URL of help page/portal
    HelpURL: "help.htm",

    // ------------------------------------------------------------------------------------------------------------------------
    // BASEMAP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set baseMap layers
    // Please note: All base maps need to use the same spatial reference. By default, on application start the first basemap will be loaded
    BaseMapLayers:
		       [
                   {
                       Key: "baseMapKey",
                       MapURL: "http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer"
                   }
		       ],


    // Initial map extent. Use comma (,) to separate values and don't delete the last comma
    DefaultExtent: "-9817810,5124390,-9808630,5128700",

    // ------------------------------------------------------------------------------------------------------------------------
    // OPERATIONAL DATA SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // WebMaps are not supported with the 10.2 version of the Election Results application. Please use Map Services for operational layers. Do not change the "UseWebmap" and "WebMapId" parameters.
    UseWebmap: false,

    WebMapId: "",

    // Set the following options for the configuration of operational layers

    // Key is used as an layerId while adding this layer to the map and has to be unique
    // ServiceURL is the REST end point for the PrecinctLayer
    // UseColor used to override the default symbology defined in the map service
    // Color used to define the renderer color of the symbol
    // Alpha used to define the transparency of the renderer
    // Query is used to query the map server for fetching precinct's
    // PrecinctName is the attribute name from the Precinct Layer which represents Precinct Name
    // County is the attribute name from the Precinct Layer which represents County name
    PrecinctLayer:
          {
              Key: "precinctLayer",
              ServiceURL: "http://203.199.47.146/arcgis/rest/services/ElectionResults/ElectionResultsLocalGov/MapServer/8",
              UseColor: true,
              Color: "#FFFC17",
              Alpha: 0.50,
              Query: "UPPER(NAME) LIKE '%${0}%'",
              PrecinctName: "NAME",
              County: "COUNTY"
          },

    //Set ReferenceOverlay Layer
    // ServiceURL is the REST end point for the reference overlay layer
    // DisplayOnLoad setting this will show the reference overlay layer on load
    ReferenceOverlayLayer:
          {
              ServiceURL: "http://localgovtemplates2.esri.com/ArcGIS/rest/services/Election/ReferenceOverlay/MapServer",
              DisplayOnLoad: true
          },

    // ------------------------------------------------------------------------------------------------------------------------

    // Set string value to be shown for null or blank values
    ShowNullValueAs: "N/A",

    // ------------------------------------------------------------------------------------------------------------------------
    // ADDRESS SEARCH SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Set locator settings such as locator symbol, size, zoom level, display fields, match score
    LocatorSettings: {
        Locators: [
                {
                    DisplayText: "Address",
                    LocatorDefaultAddress: "628 South Loomis Street Naperville IL 60540",
                    LocatorParamaters: ["SingleLine"],
                    LocatorURL: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Locators/TA_Address_NA_10/GeocodeServer",
                    CandidateFields: "Loc_name, Score, Match_addr",
                    DisplayField: "${Match_addr}",
                    ZoomLevel: 7,
                    AddressMatchScore: 80,
                    LocatorFieldName: 'Loc_name',
                    LocatorFieldValues: ["US_Streets", "US_StreetName"]
                },
                {
                    DisplayText: "Precinct",
                    LocatorDefaultPrecinct: "Lisle 12"
                }
            ]
    },

    // ------------------------------------------------------------------------------------------------------------------------
    // GEOMETRY SERVICE SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set geometry service URL
    GeometryService: "http://localgovtemplates2.esri.com/ArcGIS/rest/services/Geometry/GeometryServer",

    // ------------------------------------------------------------------------------------------------------------------------

    // SETTINGS FOR INFO-PODS ON THE BOTTOM PANEL
    // ------------------------------------------------------------------------------------------------------------------------
    // Set width of the pods in the bottom panel
    InfoBoxWidth: 424,

    // Election Results contest data shown in the bottom panel. Every section is a pod in the bottom panel
    // HeaderColor will set the color of the header of the info pod in the bottom panel
    // Title will set the contest name of the info pod in the bottom panel
    // ServiceURL is the map service URL for the contest
    // ChartData is the attribute information for the contest used in rendering charts
    // ChartType "bar-chart" (or) "pie-chart"
    // PartyDetails is the attribute information used to render party color in the charts. This has to be in the same sequence with the ChartData attribute sequence. This data is not required for piechart
    // CandidateNames is the attribute information used to display Candidate name in the charts. This has to be in the same sequence with the ChartData attribute sequence. This data is not required for piechart
    // WinningParty is the attribute name which gives the winning party name. This is not required for pie-chart
    // DisplayOnLoad setting this will show the contest layer on load. If this is set true for multiple contests, only the first occurrence is considered
    // TotalBallots is the attribute name which gives the total votes casted. This is not required for pie-chart
    ElectionResultData:
          {
              POULayer:
                    {
                        HeaderColor: "#393939",
                        Title: "President of US",
                        ServiceURL: "http://203.199.47.146/arcgis/rest/services/ElectionResults/ElectionResultsLocalGov/MapServer/0",
                        ChartData: ["NUMVOTES1", "NUMVOTES2", "NUMVOTES3", "NUMVOTES4", "NUMVOTES5", "NUMVOTES6", "NUMVOTES7", "NUMVOTES8"],
                        ChartType: "barchart",
                        PartyDetails: ["PARTY1", "PARTY2", "PARTY3", "PARTY4", "PARTY5", "PARTY6", "PARTY7", "PARTY8"],
                        CandidateNames: ["CANDIDATE1", "CANDIDATE2", "CANDIDATE3", "CANDIDATE4", "CANDIDATE5", "CANDIDATE6", "CANDIDATE7", "CANDIDATE8"],
                        DisplayOnLoad: true,
                        TotalBallots: "TOTBALLOTS"
                    },
              Senate24thDistrict:
                    {
                        HeaderColor: "#393939",
                        Title: "Senate 24th District",
                        ServiceURL: "http://203.199.47.146/arcgis/rest/services/ElectionResults/ElectionResultsLocalGov/MapServer/1",
                        ChartData: ["NUMVOTES1"],
                        ChartType: "barchart",
                        PartyDetails: ["PARTY1"],
                        CandidateNames: ["CANDIDATE1"],
                        DisplayOnLoad: false,
                        TotalBallots: "TOTBALLOTS"
                    },
              Senate42ndDistrict:
                    {
                        HeaderColor: "#393939",
                        Title: "Senate 42nd District",
                        ServiceURL: "http://203.199.47.146/arcgis/rest/services/ElectionResults/ElectionResultsLocalGov/MapServer/2",
                        ChartData: ["NUMVOTES1", "NUMVOTES2"],
                        ChartType: "barchart",
                        PartyDetails: ["PARTY1", "PARTY2"],
                        CandidateNames: ["CANDIDATE1", "CANDIDATE2"],
                        DisplayOnLoad: false,
                        TotalBallots: "TOTBALLOTS"
                    },
              Senate48thDistrict:
                    {
                        HeaderColor: "#393939",
                        Title: "Senate 48th District",
                        ServiceURL: "http://203.199.47.146/arcgis/rest/services/ElectionResults/ElectionResultsLocalGov/MapServer/3",
                        ChartData: ["NUMVOTES1"],
                        ChartType: "barchart",
                        PartyDetails: ["PARTY1"],
                        CandidateNames: ["CANDIDATE1"],
                        DisplayOnLoad: false,
                        TotalBallots: "TOTBALLOTS"
                    },
              USHouseofRepresentatives13thDistrict:
                    {
                        HeaderColor: "#393939",
                        Title: "US House of Representatives 13th District",
                        ServiceURL: "http://203.199.47.146/arcgis/rest/services/ElectionResults/ElectionResultsLocalGov/MapServer/4",
                        ChartData: ["NUMVOTES1", "NUMVOTES2", "NUMVOTES3", "NUMVOTES4"],
                        ChartType: "barchart",
                        PartyDetails: ["PARTY1", "PARTY2", "PARTY3", "PARTY4"],
                        CandidateNames: ["CANDIDATE1", "CANDIDATE2", "CANDIDATE3", "CANDIDATE4"],
                        DisplayOnLoad: false,
                        TotalBallots: "TOTBALLOTS"
                    },
              DupageCountyRecorderofDeeds:
                    {
                        HeaderColor: "#393939",
                        Title: "Dupage County Recorder of Deeds",
                        ServiceURL: "http://203.199.47.146/arcgis/rest/services/ElectionResults/ElectionResultsLocalGov/MapServer/5",
                        ChartData: ["NUMVOTES1", "NUMVOTES2"],
                        ChartType: "barchart",
                        PartyDetails: ["PARTY1", "PARTY2"],
                        CandidateNames: ["CANDIDATE1", "CANDIDATE2"],
                        DisplayOnLoad: false,
                        TotalBallots: "TOTBALLOTS"
                    },
              WillCountyRecorderofDeeds:
                    {
                        HeaderColor: "#393939",
                        Title: "Will County Recorder of Deeds",
                        ServiceURL: "http://203.199.47.146/arcgis/rest/services/ElectionResults/ElectionResultsLocalGov/MapServer/6",
                        ChartData: ["NUMVOTES1", "NUMVOTES2"],
                        ChartType: "barchart",
                        PartyDetails: ["PARTY1", "PARTY2"],
                        CandidateNames: ["CANDIDATE1", "CANDIDATE2"],
                        DisplayOnLoad: false,
                        TotalBallots: "TOTBALLOTS"
                    },
              VoterTurnout:
                    {
                        HeaderColor: "#393939",
                        Title: "Voter Turnout",
                        ServiceURL: "http://203.199.47.146/arcgis/rest/services/ElectionResults/ElectionResultsLocalGov/MapServer/7",
                        ChartData: ["PERCVOTE"],
                        DisplayOnLoad: false,
                        ChartType: "piechart"
                    }
          },

    //Query field for ElectionResultData layers
    ElectionResultDataQueryString: "NAME",

    //Set the color for different parties
    ColorCodeOfParties:
		 {
		     "Democratic": { "Color": "#243F78" },
		     "Republican": { "Color": "#B0321C" },
		     "Green Party": { "Color": "#006400" },
		     "Others": { "Color": "#ffffff" }
		 },

    //Set the color for those who voted
    VotedColor: "#66736D",

    //Set the color for those who did not vote
    DidNotVoteColor: "#E6F0E8",

    // ------------------------------------------------------------------------------------------------------------------------
    //SETTING FOR ELECTION UPDATES
    // ------------------------------------------------------------------------------------------------------------------------
    //Set data to be displayed for election updates
    Updates:
		  {
		      // Set date format
		      FormatDateAs: "MMM dd, yyyy",
		      // Set time format
		      FormatTimeAs: "HH:mm:ss",
		      //Specify the field name for last update
		      FieldName: "LASTUPDATE"
		  },

    // ------------------------------------------------------------------------------------------------------------------------
    // SETTINGS FOR MAP SHARING
    // ------------------------------------------------------------------------------------------------------------------------
    // Set URL for TinyURL service, and URLs for social media
    MapSharingOptions:
          {
              TinyURLServiceURL: "http://api.bit.ly/v3/shorten?login=esri&apiKey=R_65fd9891cd882e2a96b99d4bda1be00e&uri=${0}&format=json",
              TinyURLResponseAttribute: "data.url",
              FacebookShareURL: "http://www.facebook.com/sharer.php?u=${0}&t=Election%20Results",
              TwitterShareURL: "http://mobile.twitter.com/compose/tweet?status=Election%20Results ${0}",
              ShareByMailLink: "mailto:%20?subject=Election%20Results&body=${0}"
          }
});
