import fs from 'fs'

// Read the image data from the JSON file
function readLocalImageData(): any {
  try {
    // Read the file synchronously
    const imageDataRaw = fs.readFileSync('./src/assets/image-data.json', 'utf8')

    // Parse the JSON data
    const imageData = JSON.parse(imageDataRaw)

    // Store it in a variable
    console.log('Successfully loaded image data')
    console.log(`Number of palette colors: ${imageData.palette.length}`)
    console.log(`Number of bodies: ${imageData.images.bodies.length}`)
    console.log(`Number of accessories: ${imageData.images.accessories.length}`)
    console.log(`Number of heads: ${imageData.images.heads.length}`)
    console.log(`Number of glasses: ${imageData.images.glasses.length}`)

    // Return the data for further use
    return imageData
  } catch (error) {
    console.error('Error reading image data:', error)
    throw error
  }
}

// Execute the function
const localImageData = readLocalImageData()
console.log('Image data stored in variable: localImageData')
