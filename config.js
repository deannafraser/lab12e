
var config = {
    style:  'mapbox://styles/iamwfx/cjjx6bl926vgt2ss0l9dbpmxz',
    accessToken: 'pk.eyJ1IjoiZG1mMjMzIiwiYSI6ImNsOTJ6NjhncDFvdXM0MW1ma2hpYW0zbTUifQ.oMxK01NXekozo-1bQcmDIQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    title: 'Coastal Flooding in New York City',
    subtitle: 'Assessing Risks to Vulnerable Housing',
    byline: 'By a Digital Storyteller',
    para1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique commodo lectus ac hendrerit. Duis tortor lorem, suscipit eu congue a, feugiat ac orci. Pellentesque sollicitudin elementum enim quis semper. Nunc cursus condimentum neque, congue pretium purus. Vivamus sem nunc, egestas eu metus ac, cursus blandit purus. Vestibulum condimentum tortor rhoncus luctus convallis. Fusce ac enim id felis pretium vulputate quis sit amet libero. Curabitur in eros dapibus, pretium quam vitae, placerat urna. Aliquam eu fermentum enim, viverra fringilla dolor. Vivamus quis consequat magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla id justo vitae lectus faucibus viverra. Phasellus eu risus congue, eleifend augue at, suscipit odio. Proin sodales sagittis finibus.',
    para2:'Sed bibendum, sapien sed tincidunt consequat, felis urna pulvinar sapien, ut dignissim metus augue ac justo. Donec hendrerit ut ligula eget euismod. Aliquam sed venenatis urna. Ut lobortis ullamcorper tellus, at rutrum quam mollis eu. Cras eu urna in ligula sodales tempus sed at felis. Morbi commodo, orci at ultrices euismod, lorem enim commodo metus, nec commodo magna mauris id quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lobortis leo mauris, vitae placerat ipsum iaculis quis. Morbi fringilla dolor a orci scelerisque iaculis. Donec ullamcorper, massa sollicitudin tincidunt tincidunt, enim turpis ullamcorper velit, et rhoncus justo felis in odio. Nulla tempor, est bibendum sagittis hendrerit, nisl nibh laoreet nisi, non elementum ipsum erat a elit. Morbi nec auctor libero. Suspendisse dolor nulla, convallis id venenatis luctus, molestie lacinia velit. Nunc bibendum consequat efficitur.',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: 'images/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
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
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: 'images/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
                id: 'interlude',
                alignment: 'center',
                hidden: false,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
                video: 'images/902-1_902-2364-PD2_preview.mp4',
                location: {
                  center: [-73.97615, 40.71901],
                  zoom: 14.84,
                  pitch: 48,
                  bearing: 142.44,
                },
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
              center: [-73.97615, 40.71901],
              zoom: 15.84,
              pitch: 56,
              bearing: 260.44,
              speed: .5, // make the flying slow
              curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'housing',
                    opacity: 0,
                    duration: 10
                }],
            onChapterExit: []
        }
    ]
};
