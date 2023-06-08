// info about template: https://labs.mapbox.com/education/impact-tools/interactive-storytelling/



var config = {
    style: 'mapbox://styles/alyssacano/clh6wtg2x00a901rh7p1v8f95',
    accessToken: 'pk.eyJ1IjoiYWx5c3NhY2FubyIsImEiOiJjbGc1Zmsxc2owMnZ5M2RteTJhbzc3bjIzIn0.vzSqeahbltVZvZ982Jh7Yw',
    showMarkers: true,
    markerColor: '#FF8C00',
    theme: 'light',
    use3dTerrain: false,
    title: 'Thurston Hills Natural Area Fuels Management',
    subtitle: 'University of Oregon Environmental Leadership Program Fules and Fire Team 2023', 
    footer: 'Partner: Willamalane Park and Recreation District <p> Source: Fules and Fire 2023 Data Collection',
    chapters: [
        
        
        // title card
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'About this map',
            description: '<p>To interact with this map, scroll through to view the Units and different Plots in which we collected our data. Click on the point to learn more about the plot itself and the data we collected. It is important to note that these plots go in the order in which we recorded the data, this is why it is not numerically ordered.<p> ELP and Willamalane: <p><p>As part of the Environmental Leadership Program (ELP) Fules and Fires Team at the University of Oregon, we are collaborating with our community partner Willamalane to examine fuels in the area to and give recommendations on fuel management in the area to be better prepared for potential wildfires. <p> Thurston Hills Natural Area (THNA) is a 675 acre mixed use conservation and recreation natural area in East Springfield. THNA has a variety of habitats like “conifer and mixed forest, oak woodlands, grasslands (oak savannas and prairie habitats), and cliffs rocky outcrops, and talus” (Willamalane). It is managed using tree thinning and removal of overgrown native and non-native vegetation. Willamalane Park and Recreation District is responsible for maintaining and operating recreation facilities in the Springfield area. This includes areas such as parks, trails, community centers, and more.<p> There are three main categories in the fuels and fire protocol that helped complete our data collection. The protocol calls for examining a 50ft transect, three quadrats along the 50ft transect in the 0-3 ft mark, 25-27ft, and 47-50ft. Lastly the 1/100th acre plot is put in the middle of the transect to measure the surrounding area. This interactive story map will be using general qualitative data and will incorporate information on the connection of canopy and 1000 hour fuels. 1000 hour fuels include large logs that are known to burn for long periods of time in a wildfire situation.  <p>  <p>',
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
            description: 'This unit is the most like the Oak prairie environment we are trying to restore. There are a few trees and lots of open savanna habitat in this unit.',
            location: {
                // center: [-122.914, 44.0257],
                // zoom: 18,
                // pitch: 20,
                // bearing: 176       
                center: [-122.914, 44.0257 ], // x,y aka long, lat
                zoom: 18,
                pitch: 30,
                bearing: 176
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
            alignment: 'right',
            hidden: false,
            title: 'Unit #14',
            description: 'This unit was exceedingly difficult to navigate. It contained a lot of tall growth blackberry that we had to cut through and poison oak that we had to avoid. ',
            location: {
                center: [-122.89985, 44.02582],
                zoom: 18,
                pitch: 30,
                bearing: 176    
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
        
        
        
        
      {
            id: 'other-identifier5',
            alignment: 'right',
            hidden: false,
            title: 'Unit #30',
            image: 'https://github.com/alyssac10/WebMapping/blob/main/THNA23_30-58-T177.jpg?raw=true',
            description: 'This unit is densley forested and is high in elevation with thin understory. ',
            location: {
                center: [-122.89811, 44.03202 ],
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
        
        
        
        
        
        
        
        {
            id: 'slug-style-id6',
            alignment: 'left',
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
                bearing: 176      
                
                
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
              
        {
            id: 'slug-style-id9',
            alignment: 'left',
            hidden: false,
            title: 'Unit #39',
            image:'https://github.com/alyssac10/WebMapping/blob/main/THNA23_39-76_T19.JPG?raw=true',
            description: ' This unit is deeply forested with a higher elevation. The understory is thin.',
            location: {
                center: [ -122.889085, 44.039313],
                zoom: 18,
                pitch: 20,
                bearing: 176
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
        {
            id: 'other-identifier10',
            alignment: 'right',
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
                bearing: 176      
                
                
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
              
                
         
                
                
                

        
           
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
                bearing: 176
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
                bearing: 176      
                      
                
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },  
          
        
         {
            id: 'other-identifier7',
            alignment: 'right',
            hidden: false,
            title: 'Unit #34',
            image: 'https://github.com/alyssac10/WebMapping/blob/main/THNA_34-65_T158.JPG?raw=true',
            description: 'Most of the unit is relatively steep with sparse Douglas-fir canopy cover. There is heavy blackberry cover throughout the unit. ',
            location: {
                center: [-122.88919182556111, 44.033111820974725 ],
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
                
        
        
          {
            id: 'other-identifier7',
            alignment: 'right',
            hidden: false,
            title: 'Unit #27',
            image: 'https://github.com/alyssac10/WebMapping/blob/main/THNA_34-65_T158.JPG?raw=true',
            description: 'Most of the unit is relatively steep with sparse Douglas-fir canopy cover. There is heavy blackberry cover throughout the unit. ',
            location: {
                center: [-122.90437536808, 44.0331103723231 ],
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
                
            {
            id: 'other-identifier14',
            alignment: 'right',
            hidden: false,
            title: 'Data Results',
            description: 'Data Difficulties: There were various plots and units that were difficult to access which resluted in no data collection for some areas. Units 11, 13,and 14 in particular had very plots recorded. Unit 11 was inaccessable with the overgrown blackberry in the area. One plot was accessble in unit 13, so one point was recorded in the unit. And two pionts were recorded in unit 14. Risk assesments had to be taken in order to ensrue the safety of our group when collecting data.',
            image: 'https://github.com/alyssac10/WebMapping/blob/main/chart.PNG?raw=true',
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

            











    