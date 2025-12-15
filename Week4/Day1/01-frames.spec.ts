
import { test } from "@playwright/test";

test(`Learn frames using playwright`,async ({page}) => {
    
await page.goto(`https://leafground.com/frame.xhtml`);

const allframes = page.frames();

//console.log(allframes); frame1 ="", frame2="",... => [frame1,frame2,frame3,frame4]


const frameCount = allframes.length;

console.log(`Total count of frames in the page is ${frameCount}`);

// for (let index = 0; index < frameCount; index++) {
  
// const title = await allframes[index].title() //=> 
// // 
// /* allframe[0] => frame1, => Frame
// // allframe[1] => frame2,
// // allframe[2] => frame3,
// // allframe[3] => frame4 */

// console.log(`The title of the frames are ${title}`);
// }



await page.waitForTimeout(3000)

for ( let tempVal of allframes){
    const title = await tempVal.title()
    console.log(`The title of frames are ${title}`);
    
}

// allframes.forEach( async (tempVal) => {     
//    const title = await tempVal.title()
//     console.log(`The title of frames are ${title}`);

// });

})