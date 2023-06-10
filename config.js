// info about template: https://labs.mapbox.com/education/impact-tools/interactive-storytelling/  //fire icon:  <span style='font-size:100px;'>&#128293;</span>



var config = {
                    style: 'mapbox://styles/alyssacano/clh6wtg2x00a901rh7p1v8f95',
                    accessToken: 'pk.eyJ1IjoiYWx5c3NhY2FubyIsImEiOiJjbGc1Zmsxc2owMnZ5M2RteTJhbzc3bjIzIn0.vzSqeahbltVZvZ982Jh7Yw',
                    showMarkers: true, 
                    markerColor: 'orange',
                    theme: 'light',
                    use3dTerrain: false,
                    span: ' <a href="https://blogs.uoregon.edu/fuelsandfire2023/">&#128293</a> <a href="https://www.willamalane.org/">&#128293</a> <a href="https://creativecommons.org/licenses/by-nd/4.0/">&#128293</a>', 
                    title: "Thurston Hills Natural Area Fuels Management",
                    subtitle: 'University of Oregon Environmental Leadership Program Fuels and Fire Team 2023', 
                    footer: ' Interactive Story Map Created By: Alyssa Cano <p>Community Partner: Willamalane Park and Recreation District <p> Data Source: Fuels and Fire 2023 Team <p> Picture Credits: Fuels and Fire 2023 Team<p> <p> Fuels and Fire 2023 Team: Kate Aldridge, Thomas Brugnara, Alyssa Cano, ​ Connor Cooney, Nico Gouveia, Grace Johnson, Sam Metzger, Paul Phelan, Noah Sary  ',
                    chapters: [


        
        
        
          // title card
                    {
                        id: 'slug-style-id',
                        alignment: 'left',
                        hidden: false,
                        title: 'Interact with the map:',
                        description: '<p> <b> <p> -Click the fire icons above!<p> -Scroll through to view the units. <p> -Click on the points to know more about the plot. <p> (The locations are in the order in which the data was collected) <b>',

                        location: {
                            center: [-122.8871155, 44.0474499], // x,y aka long, lat
                            zoom: 12,
                            pitch: 30,
                            bearing: 176
                        },
                        mapAnimation: +'flyTo',
                        rotateAnimation: false,
                        callback: '',
                        onChapterEnter: [
                            // {
                            //     layer: 'layer-name',
                            //     opacity: 1,
                            //     duration: 5000
                            // }
                        ],
                        onChapterExit: [
                            // {
                            //     layer: 'layer-name',
                            //     opacity: 0
                            // }
                        ]


                    },
        
        // title card
                        {
                            id: 'slug-style-id',
                            alignment: 'left',
                            hidden: false,
                            title: 'About the map:  ',
                            description: '<p> This interactive story map will be using general qualitative data and will incorporate information on the connection of canopy and 1000 hour fuels. 1000 hour fuels include large logs with a 3-8 inch diameter. These fuels that are known to cause dangerous fire conditions in a wildfire situation. <p>  <b>ELP and Willamalane: </b><p><p>We are apart of the Environmental Leadership Program (ELP) Fuels and Fires Team at the University of Oregon. We are collaborating with our community partner Willamalane Park and Recreation District to examine fuels in the area to and give recommendations on fuel management in the area to be better prepared for potential wildfires. <p> Thurston Hills Natural Area (THNA) is a 675 acre mixed use conservation and recreation natural area in East Springfield. THNA has a variety of habitats like “conifer and mixed forest, oak woodlands, grasslands (oak savannas and prairie habitats), and cliffs rocky outcrops, and talus” (Willamalane). It is managed using tree thinning and removal of overgrown native and non-native vegetation. Willamalane manages a variety of recreational areas. This includes parks, trails, community centers, and more.<p><b>Research Methods: </b> <p>There are three main categories in the fuels and fire protocol that helped complete our data collection. The protocol calls for examining a 50ft transect, three quadrats along the 50ft transect (0-3ft, 25-27ft, and 47-50ft). Lastly the 1/100th acre plot is put in the middle of the transect to measure the surrounding area. <p> ',
                            location: {
                                center: [-122.8871155, 44.0474499], // x,y aka long, lat
                                zoom: 12,
                                pitch: 30,
                                bearing: 176
                            },
                            mapAnimation: +'flyTo',
                            rotateAnimation: false,
                            callback: '',
                            onChapterEnter: [
                                // {
                                //     layer: 'layer-name',
                                //     opacity: 1,
                                //     duration: 5000
                                // }
                            ],
                            onChapterExit: [
                                // {
                                //     layer: 'layer-name',
                                //     opacity: 0
                                // }
                            ]


                        },

        
        // Unit 2
                        {
                            id: 'other-identifier2',
                            alignment: 'right',
                            hidden: false,
                            title: 'Unit #2',
                            image:'https://github.com/alyssac10/WebMapping/blob/main/THNA23_02-01_T90.jpeg?raw=true', 
                            description: 'This unit is the most like the Oak prairie environment we are trying to restore. There are a few trees and lot of open savanna habitat in this unit.',
                            location: {
                                // center: [-122.914, 44.0257],
                                // zoom: 18,
                                // pitch: 20,
                                // bearing: 176       
                                center: [-122.914, 44.0257 ], // x,y aka long, lat
                                zoom: 18,
                                pitch: 20,
                                bearing: 270
                            },

                            rotateAnimation: false,
                            callback: '',
                            onChapterEnter: [
                                // {
                                //     layer: 'layer-name',
                                //     opacity: 1,
                                //     duration: 5000
                                // }
                            ],
                            onChapterExit: [
                                // {
                                //     layer: 'layer-name',
                                //     opacity: 0
                                // }
                            ]
                        },
        // unit 14
                        {
                            id: 'other-identifier3',
                            alignment: 'left',
                            hidden: false,
                            title: 'Unit #14', 
                            image:'https://github.com/alyssac10/WebMapping/blob/main/THNA23_14-25.jpg?raw=true', 
                            description: 'This unit was exceedingly difficult to navigate. It contained a lot of tall growth blackberry that we had to cut through and poison oak that we had to avoid. ',
                            location: {
                                center: [-122.89985, 44.02582],
                                zoom: 18,
                                pitch: 30,
                                bearing: 300    
                            },
                            mapAnimation: 'flyTo',
                            rotateAnimation: false,
                            callback: '',
                            onChapterEnter: [ // {
                                //     layer: 'layer-name',
                                //     opacity: 1,
                                //     duration: 5000
                                // }
                            ],
                            onChapterExit: [
                                // {
                                //     layer: 'layer-name',
                                //     opacity: 0
                                // }
                            ]
                        },
        //unit 29
                        {
                            id: 'other-identifier4',
                            alignment: 'right',
                            hidden: false,
                            title: 'Unit #29',
                            image:'https://github.com/alyssac10/WebMapping/blob/main/THNA23_29-54_T270.jpg?raw=true', 
                            description: 'When we visited this unit it was raining heavily and epitomized the PNW rainforest habitat. There is a lot of species diversity on this northwestward facing slope. ',
                            location: {
                                center: [-122.899444, 44.024167 ],
                                zoom:18,
                                pitch:20,
                                bearing:176      



                            },
                            mapAnimation: 'flyTo',
                            rotateAnimation: false,
                            callback: '',
                            onChapterEnter: [],
                            onChapterExit: []
                        },

        
        //unit 30
        
                        {
                                id: 'other-identifier5',
                                alignment: 'left',
                                hidden: false,
                                title: 'Unit #30',
                                image: 'https://github.com/alyssac10/WebMapping/blob/main/THNA23_30-58-T177.jpg?raw=true',
                                description: 'This unit is densley forested and is high in elevation with thin understory. ',
                                location: {
                                    center: [-122.89811, 44.03202 ],
                                    zoom: 18,
                                    pitch: 20,
                                    bearing: 299      



                                },
                                mapAnimation: 'flyTo',
                                rotateAnimation: false,
                                callback: '',
                                onChapterEnter: [],
                                onChapterExit: []
                        },




        //unit 23


                        {
                                id: 'slug-style-id6',
                                alignment: 'right',
                                hidden: false,
                                title: 'Unit #23',
                                image:'https://github.com/alyssac10/WebMapping/blob/main/image-20230507-035211-61900b23.jpeg?raw=true',
                                description: 'This unit is deeply forested with a higher elevation. The understory is thin.',
                                location: {
                                    center: [-122.910854, 44.0309858333 ],
                                    zoom: 18,
                                    pitch: 20,
                                    bearing: 176
                                },
                                mapAnimation: 'flyTo',
                                rotateAnimation: false,
                                callback: '',
                                onChapterEnter: [
                                ],
                                onChapterExit: []
                        },


        //unit 35

                        {
                                id: 'other-identifier8',
                                alignment: 'left',
                                hidden: false,
                                title: 'Unit #35',
                                image:'https://github.com/alyssac10/WebMapping/blob/main/THNA_35-69_T311.jpg?raw=true',
                                description: 'Entire unit is full of dense shrub cover. Many large logs were found underneath shrub patches.  ',
                                location: {
                                    center: [-122.888, 44.035 ],
                                    zoom: 18,
                                    pitch: 20,
                                    bearing: 131      



                                },
                                mapAnimation: 'flyTo',
                                rotateAnimation: false,
                                callback: '',
                                onChapterEnter: [],
                                onChapterExit: []
                    },
                        
        //unit 39

                    {
                        id: 'slug-style-id9',
                        alignment: 'right',
                        hidden: false,
                        title: 'Unit #39',
                        image:'https://github.com/alyssac10/WebMapping/blob/main/THNA23_39-76_T19.JPG?raw=true',
                        description: ' This unit is deeply forested with a higher elevation. The understory is thin.',
                        location: {
                            center: [ -122.889085, 44.039313],
                            zoom: 18,
                            pitch: 20,
                            bearing: 262
                        },
                        mapAnimation: 'flyTo',
                        rotateAnimation: false,
                        callback: '',
                        onChapterEnter: [
                            // {
                            //     layer: 'layer-name',
                            //     opacity: 1,
                            //     duration: 5000
                            // }
                        ],
                        onChapterExit: [
                            // {
                            //     layer: 'layer-name',
                            //     opacity: 0
                            // }  
                        ]
                    },
                        
        //unit OW
        
                    {
                        id: 'other-identifier10',
                        alignment: 'left',
                        hidden: false,
                        title: 'Unit #OW',
                        image: 'https://github.com/alyssac10/WebMapping/blob/main/THNA23_OWEB-01_T206.jpeg?raw=true',
                        description: 'Combination of Oak-Conifer woodland environment along with open praire. ',
                        location: {
                            center: [-122.89, 44.0269444444 ],
                            zoom: 18,
                            pitch: 20,
                            bearing: 176      


                        },
                        mapAnimation: 'flyTo',
                        rotateAnimation: false,
                        callback: '',
                        onChapterEnter: [],
                        onChapterExit: []
                    },  
                        
        //unit 11
                        
                    {
                        id: 'other-identifier11',
                        alignment: 'right',
                        hidden: false,
                        title: 'Unit #6',
                        image:'https://github.com/alyssac10/WebMapping/blob/main/THNA23_02-01_T90.jpeg?raw=true', 
                        description: 'This area is open prairie with many grasses and small patches of trees and shrubs. Not much canopy in the area. ',
                        location: {
                            center: [-122.9186111111, 44.0297222222 ],
                            zoom: 18,
                            pitch: 20,
                            bearing: 330      



                        },
                        mapAnimation: 'flyTo',
                        rotateAnimation: false,
                        callback: '',
                        onChapterEnter: [],
                        onChapterExit: []
                    },



        //unit 22

                    {
                        id: 'slug-style-id12',
                        alignment: 'left',
                        hidden: false,
                        title: 'Unit #22',
                        image: 'https://github.com/alyssac10/WebMapping/blob/main/image-20230507-034516-34a1a6c4.jpeg?raw=true',
                        description: 'This unit contained a plateau in the hillside which made it difficult to collect our data.',
                        location: {
                            center: [-122.9147848333, 44.0306898333 ],
                            zoom: 18,
                            pitch: 20,
                            bearing: 104
                        },
                        mapAnimation: 'flyTo',
                        rotateAnimation: false,
                        callback: '',
                        onChapterEnter: [
                            // {
                            //     layer: 'layer-name',
                            //     opacity: 1,
                            //     duration: 5000
                            // }
                        ],
                        onChapterExit: [
                            // {
                            //     layer: 'layer-name',
                            //     opacity: 0
                            // }

                                 ]
                    },
        
         //unit 40               

                     {
                        id: 'other-identifier13',
                        alignment: 'right',
                        hidden: false,
                        title: 'Unit #40',
                        image: 'https://github.com/alyssac10/WebMapping/blob/main/THNA23_40-81_T71.JPG?raw=true',
                        description: 'Unit was a mixed canopy conifer-hardwood forest with extensive herbaceous cover. ',
                        location: {
                            center: [-122.8894444444, 44.0413888889],
                            zoom: 18,
                            pitch: 20,
                            bearing: 71      


                        },
                        mapAnimation: 'flyTo',
                        rotateAnimation: false,
                        callback: '',
                        onChapterEnter: [],
                        onChapterExit: []
                    },  
                        
        //unit 34


                     {
                        id: 'other-identifier7',
                        alignment: 'left',
                        hidden: false,
                        title: 'Unit #34',
                        image: 'https://github.com/alyssac10/WebMapping/blob/main/THNA_34-65_T158.JPG?raw=true',
                        description: 'Most of the unit is relatively steep with sparse Douglas-fir canopy cover. There is heavy blackberry cover throughout the unit. ',
                        location: {
                            center: [-122.88919182556111, 44.033111820974725 ],
                            zoom: 18,
                            pitch: 20,
                            bearing: 158      


                        },
                        mapAnimation: 'flyTo',
                        rotateAnimation: false,
                        callback: '',
                        onChapterEnter: [],
                        onChapterExit: []
                    },  


        //Data Results

            {
            id: 'other-identifier14',
            alignment: 'right',
            hidden: false,
            title: 'Data Results',
            description: '<p>The chart above shows the correlation of canopy cover and 1000 hour fuels. Canopy cover is divided into classes of percent cover. Our group discovered that with more canopy cover in the area, it is more likely that there will be 1000 hour fuels. <p> Data Difficulties: There were various units with plots that were difficult to access which resulted in no data collection for some areas. Units 11, 13, and 14 in particular had very difficult plots to record. Unit 11 was inaccessible with the overgrown blackberry in the area, resulting in no data collection in this area. One plot was accessible and recorded in unit 13. Two points were recorded in unit 14. Risk assessments had to be taken to ensure the safety of our group when collecting data. ',
            image: 'https://github.com/alyssac10/WebMapping/blob/main/updated_chart.png?raw=true',
            location: {
               center: [-122.8871155, 44.0474499], // x,y aka long, lat
                zoom: 11,
                pitch: 30,
                bearing: 176  
                
                
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
              
                
         
                
                
        
        
    ]
};

            











    