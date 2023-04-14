import Head from 'next/head'
import Image from 'next/image'
import { SimpleLayout } from '@/components/SimpleLayout'

// Import the images you want to display
import image1 from '@/images/photos/photosquared/1.jpg'
import image2 from '@/images/photos/photosquared/2.jpg'
import image3 from '@/images/photos/photosquared/3.jpg'
import image4 from '@/images/photos/photosquared/4.jpg'
import image5 from '@/images/photos/photosquared/5.jpeg'
import image6 from '@/images/photos/photosquared/6.jpeg'
import image7 from '@/images/photos/photosquared/7.jpeg'
import image8 from '@/images/photos/photosquared/8.jpeg'
import image9 from '@/images/photos/photosquared/9.jpeg'
import image10 from '@/images/photos/photosquared/10.jpeg'
import image11 from '@/images/photos/photosquared/11.jpeg'
import image12 from '@/images/photos/photosquared/12.jpeg'

function Photos() {
  // Create an array of the images you want to display
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="grid grid-cols-3 gap-5 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className="relative aspect-[9/10] overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800"
          >
            <Image
              src={image}
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - Zack Bolich</title>
        <meta
          name="description"
          content="A gallery of my artwork and projects."
        />
      </Head>
      <SimpleLayout
        title="Gallery"
        intro="A collection of my artwork and projects."
      >
        <Photos />
      </SimpleLayout>
    </>
  )
}
