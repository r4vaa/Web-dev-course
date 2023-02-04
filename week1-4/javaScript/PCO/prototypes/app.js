// Prototype

// String.prototype.yell = function(){
//     return `OMG!!!  ${this.toUpperCase()} !!!!`
// }

// Array.prototype.push = function(){
//     return `Sorry Cant delete that ${this}element`;
// }


//   OOP

//  Factory Function






// function makeColor(r,g,b){
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const { r, g, b } = this;
//         return `rgb(${r},${g},${b})`;
//     }
    
//     color.hex = function() {
//         const { r, g, b } = this;
//         return '#' +((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//     }

//     return color;
// }

// const firstColor = makeColor(11,22,33);
// firstColor.hex() 


// constructor function
// Creates a blank, plain JavaScript Object:
// Links(sets the constructor of) this object to another object;
// Passes the newly created Object from step 1 as the this context;
// Returns this if the function doesn't return its own object.


function Color(r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function(){
    const { r, g, b} = this;
    return `rgb(${r},${g},${b})`;
}

Color.prototype.hex = function() {
            const { r, g, b } = this;
            return '#' +((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        }
    
Color.prototype.rgba = function(a = 1.0) {
        const { r , g, b } = this;
        return `rgba(${r},${g},${b},${a})`;
}


const color1 = new Color(24,111,12);
const color2 = new Color(11,255,11);