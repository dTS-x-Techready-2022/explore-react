import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    logo: "./images/logo.png",
    aboutUsImages: [
        "./images/annie-spratt-QckxruozjRg-unsplash.jpg",
        "./images/javier-allegue-barros-i5Kx0P8A0d4-unsplash.jpg",
    ],
    header: [
        "./images/kote-puerto-so5nsYDOdxw-unsplash.jpg",
        "./images/ludemeula-fernandes-9UUoGaaHtNE-unsplash.jpg",
        "./images/michael-sum-LEpfefQf4rU-unsplash.jpg",
        "./images/mikhail-vasilyev-NodtnCsLdTE-unsplash.jpg",
        "./images/yerlin-matu-GtwiBmtJvaU-unsplash.jpg",
    ],
    packages: [
        {
            image: "./images/package-daily.png",
            name: "image1",
            title: "Daily Package",
            reverse: "row",
            description: "lorem ipsum dolor sit amet consectetur adipiscing elit molestie turpis pharetra cursus neque fringilla vivamus libero tempus netus tincidunt maximus mattis in primis sodales enim curae lobortis ad finibus parturient tellus facilisi taciti fusce nascetur eu erat sed praesent non mollis varius rutrum consequat hac orci ridiculus platea sem placerat dis convallis semper nam pellentesque class natoque eros aliquam odio commodo potenti maecenas elementum purus penatibus et facilisis aenean vestibulum interdum donec habitant montes at blandit sagittis sociosqu himenaeos accumsan aptent dictumst massa cras torquent inceptos hendrerit dui tortor nibh egestas nisl fames eleifend vel mauris sapien suscipit bibendum ornare"
        },
        {
            image: "./images/package-weekly.png",
            name: "image2",
            title: "Weekly Package",
            reverse: "row",
            description: "lorem ipsum dolor sit amet consectetur adipiscing elit molestie turpis pharetra cursus neque fringilla vivamus libero tempus netus tincidunt maximus mattis in primis sodales enim curae lobortis ad finibus parturient tellus facilisi taciti fusce nascetur eu erat sed praesent non mollis varius rutrum consequat hac orci ridiculus platea sem placerat dis convallis semper nam pellentesque class natoque eros aliquam odio commodo potenti maecenas elementum purus penatibus et facilisis aenean vestibulum interdum donec habitant montes at blandit sagittis sociosqu himenaeos accumsan aptent dictumst massa cras torquent inceptos hendrerit dui tortor nibh egestas nisl fames eleifend vel mauris sapien suscipit bibendum ornare"
        },
        {
            image: "./images/package-monthly.png",
            name: "image3",
            title: "Monthly Package",
            reverse: "row",
            description: "lorem ipsum dolor sit amet consectetur adipiscing elit molestie turpis pharetra cursus neque fringilla vivamus libero tempus netus tincidunt maximus mattis in primis sodales enim curae lobortis ad finibus parturient tellus facilisi taciti fusce nascetur eu erat sed praesent non mollis varius rutrum consequat hac orci ridiculus platea sem placerat dis convallis semper nam pellentesque class natoque eros aliquam odio commodo potenti maecenas elementum purus penatibus et facilisis aenean vestibulum interdum donec habitant montes at blandit sagittis sociosqu himenaeos accumsan aptent dictumst massa cras torquent inceptos hendrerit dui tortor nibh egestas nisl fames eleifend vel mauris sapien suscipit bibendum ornare"
        },
    ],
    services: [
        {
            image: "./images/jeshoots-com-__ZMnefoI3k-unsplash.jpg",
            name: "image1",
            title: "Bersih",
            reverse: "row",
            description: "lorem ipsum dolor sit amet consectetur adipiscing elit molestie turpis pharetra cursus neque fringilla vivamus libero tempus netus tincidunt maximus mattis in primis sodales enim curae lobortis ad finibus parturient tellus facilisi taciti fusce nascetur eu erat sed praesent non mollis varius rutrum consequat hac orci ridiculus platea sem placerat dis convallis semper nam pellentesque class natoque eros aliquam odio commodo potenti maecenas elementum purus penatibus et facilisis aenean vestibulum interdum donec habitant montes at blandit sagittis sociosqu himenaeos accumsan aptent dictumst massa cras torquent inceptos hendrerit dui tortor nibh egestas nisl fames eleifend vel mauris sapien suscipit bibendum ornare"
        },
        {
            image: "./images/kate-stone-matheson-uy5t-CJuIK4-unsplash.jpg",
            name: "image2",
            title: "Nyaman",
            reverse: "row-reverse",
            description: "lorem ipsum dolor sit amet consectetur adipiscing elit molestie turpis pharetra cursus neque fringilla vivamus libero tempus netus tincidunt maximus mattis in primis sodales enim curae lobortis ad finibus parturient tellus facilisi taciti fusce nascetur eu erat sed praesent non mollis varius rutrum consequat hac orci ridiculus platea sem placerat dis convallis semper nam pellentesque class natoque eros aliquam odio commodo potenti maecenas elementum purus penatibus et facilisis aenean vestibulum interdum donec habitant montes at blandit sagittis sociosqu himenaeos accumsan aptent dictumst massa cras torquent inceptos hendrerit dui tortor nibh egestas nisl fames eleifend vel mauris sapien suscipit bibendum ornare"
        },
        {
            image: "./images/konstantin-dyadyun-LTozSVubv5g-unsplash.jpg",
            name: "image3",
            title: "Aman",
            reverse: "row",
            description: "lorem ipsum dolor sit amet consectetur adipiscing elit molestie turpis pharetra cursus neque fringilla vivamus libero tempus netus tincidunt maximus mattis in primis sodales enim curae lobortis ad finibus parturient tellus facilisi taciti fusce nascetur eu erat sed praesent non mollis varius rutrum consequat hac orci ridiculus platea sem placerat dis convallis semper nam pellentesque class natoque eros aliquam odio commodo potenti maecenas elementum purus penatibus et facilisis aenean vestibulum interdum donec habitant montes at blandit sagittis sociosqu himenaeos accumsan aptent dictumst massa cras torquent inceptos hendrerit dui tortor nibh egestas nisl fames eleifend vel mauris sapien suscipit bibendum ornare"
        },
        {
            image: "./images/wes-hicks-qGheSe6xIVY-unsplash.jpg",
            name: "image4",
            title: "Amanah",
            reverse: "row-reverse",
            description: "lorem ipsum dolor sit amet consectetur adipiscing elit molestie turpis pharetra cursus neque fringilla vivamus libero tempus netus tincidunt maximus mattis in primis sodales enim curae lobortis ad finibus parturient tellus facilisi taciti fusce nascetur eu erat sed praesent non mollis varius rutrum consequat hac orci ridiculus platea sem placerat dis convallis semper nam pellentesque class natoque eros aliquam odio commodo potenti maecenas elementum purus penatibus et facilisis aenean vestibulum interdum donec habitant montes at blandit sagittis sociosqu himenaeos accumsan aptent dictumst massa cras torquent inceptos hendrerit dui tortor nibh egestas nisl fames eleifend vel mauris sapien suscipit bibendum ornare"
        },
    ]
}

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {}
})

export default imageSlice.reducer;

