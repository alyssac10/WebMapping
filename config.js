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
    footer: 'Source: Willamane Park and Rereation District, OR Data',
    chapters: [
        
        
        // title card
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'About Thurston Hills Natural Area and Willamane',
            image:'https://fitlot.org/wp-content/uploads/2021/03/willamalane-768x768.png', 
            description: 'As part of the Environmental Leadership Program (ELP) Fules and Fires Team at the University of Oregon, we are collaborating with our community partner Willamalane to examine fuels in the area to and give recommendations on fuel management in the area to be better prepared for potential wildifres. <p> Thurston Hills Natural Area (THNA) is a 675 acre mixed use conservation & recreation natural areain East Springfield. THNA has a variety of habitats like “conifer and mixed forest, oak woodlands, grasslands (oak savannas and prairie habitats), and cliffs rocky outcrops, and talus.” (Willamalane) It is managed using tree thinning and removal of overgrown native and non-native vegetation.<p> There are three main categories in our protocol: the transect, the quadrats, and the 1/100th acre plot. We begin with setting up the 50 ft transect, upon which the other two facets will be added. This map will highlight the....  <p> <p> <b>How to use this map:<b> <p>To interact with this map, scroll thorugh to view the Units and different Plots in which we collected our data. Click on the point to learn more about the plot itself and the data we collected.<p>',
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
            description: ' This unit is deeply forested with a higher elevation. The understory is thin.',
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
                
                
                {
            id: 'other-identifier7',
            alignment: 'right',
            hidden: false,
            title: 'Unit #34',
            description: 'Plot that is selected.',
            location: {
                center: [-122.88919182556111, 444.033111820974725 ],
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
            id: 'other-identifier8',
            alignment: 'left',
            hidden: false,
            title: 'Unit #35',
            description: 'Plot that is selected.',
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
              
                
         
                
                
                
  
            ]
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
                
                
                {
            id: 'other-identifier10',
            alignment: 'right',
            hidden: false,
            title: 'Unit #OW',
            image: 'https://github.com/alyssac10/WebMapping/blob/main/THNA23_OWEB-01_T206.jpeg?raw=true',
            description: 'Plot that is selected.',
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
              
                
         
                
                
                
  
            ]
        },
        
        
           
        {
            id: 'slug-style-id12',
            alignment: 'left',
            hidden: false,
            title: 'Unit #22',
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
                
                
                {
            id: 'other-identifier13',
            alignment: 'right',
            hidden: false,
            title: 'Unit #40',
            description: 'Plot that is selected.',
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
            id: 'other-identifier14',
            alignment: 'right',
            hidden: false,
            title: 'Data Results',
            description: 'Data Difficulties: There were various plots and units that were difficult to access which resluted in no data collection for some areas. Units 11, 13,and 14 in particular had very plots recorded. Unit 11 was inaccessable with the overgrown blackberry in the area. One plot was accessble in unit 13, so one point was recorded in the unit. And two pionts were recorded in unit 14. Risk assesments had to be taken in order to ensrue the safety of our group when collecting data.',
            location: {
                center: [-122.90361111, 44.02250000],
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
              
                
         
                
                
                
  
            ]
        },
        
        
    ]
};

            











    