//Calculate the amount of water that can be trapped after raining.
let height = [0,1,0,2,1,0,1,3,2,1,2,1];

function trapRainWater(height){
    let n = height.length;
    let totalWater = 0;

    for(let i=0;i<n;i++){
        let leftMax =0;
        let rightMax = 0;

        //find left max
        for(let j =i; j>=0;j--){
            leftMax = Math.max(leftMax , height[j]);
        }
        //find right max
        for(let k =i; k<n;k++){
            rightMax = Math.max(rightMax , height[k]);
        }
        //calculate water
        totalWater += Math.min(leftMax , rightMax) - height[i];

    }

    return totalWater;
}
console.log("total trapped water :" + trapRainWater(height));