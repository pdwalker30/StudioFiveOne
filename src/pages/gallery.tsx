import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Gallery = () => {
  const pictures = [
    'break-area.jpg',
    'dispensary2.jpg',
    'FlowersPorch.jpg',
    'front-and-side-entrance.jpg',
    'FrontDoorWithStatue.jpg',
    'HairDryers.jpg',
    'HairWashingStation.jpg',
    'hall.jpg',
    'MannequiHeadPhoto.jpg',
    'media-wall.jpg',
    'nighttime-at-fiveone.jpg',
    'outside-sign-20220402.jpg',
    'PaintingWithChair.jpg',
    'pink-room-2022.jpg',
    'RefridgeratorSticker.jpg',
    'rustic-room-facing-front.jpg',
    'rustic-room-facing-rear.jpg',
    'seasonal-bride-of-frankenstein.jpg',
    'shampoo-room-front.jpg',
    'side-room-facing-dispensary.jpg',
    'side-room-facing-rear.jpg',
    'sink-room.jpg',
    'StudioFiveOneMantle.jpg',
    'StylistChairWithDepthOfField.jpg',
    'StylistChairWithFireplace.jpg',
    'SylistAreaWithFireplace.jpg',
  ];

  return (
    <Main
      meta={<Meta title="Gallery" description="Pictures of Studio Five One" />}
    >
      <div className="container mx-auto flex flex-wrap">
        {pictures.map((picture, index) => (
          <div
            key={index}
            className="w-full rounded p-2 shadow-lg md:w-1/2 lg:w-1/3"
          >
            <img src={`/assets/images/${picture}`} alt={picture} />
          </div>
        ))}
      </div>
    </Main>
  );
};

export default Gallery;
