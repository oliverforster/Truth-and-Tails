export { bookData}
import MollyCover from '$lib/images/MollyCover.jpg'
import VincentCover from '$lib/images/VincentCover.jpg'
import RoxyCover from '$lib/images/RoxyCover.jpg'
import CarlosCover from '$lib/images/CarlosCover.jpg'
const bookData = [
	{
		Title: 'Molly the Mole',
		Img: MollyCover,
		Content: "Molly the Mole has lots of friends, but sometimes gets sad because of how different she feels. Then one day, she realises that the reason her friends love her is because there aren't many animals like her around... ",
        BgColour: 'bg-molly',
		Price: 21.99
    },
	{
		Title: 'Vincent the Vixen',
		Img: VincentCover,
		Content: 'Vincent the Vixen loves nothing more than playing make-believe with their brothers and sisters. But although the fox cubs all love using their imagination to be whoever they want to be, Vincent is happiest when they understand and accept who they really are.',
        BgColour: 'bg-vincent',
		Price: 21.99
	},
	{
		Title: 'Carlos the Chameleon',
		Img: CarlosCover,
		Content: 'Carlos the Chameleon is a unique little creature. He can change his colour to fit in anywhere in the rainforest. But soon, he realises that he fits in best with all the animals when he\'s being himself. ',
        BgColour: 'bg-carlos',
		Price: 21.99
	},
	{
		Title: 'Roxy the Raccoon',
		Img: RoxyCover,
		Content: 'Roxy the Raccoon lives in the forest with her three best friends, who she loves to visit and play games with. Roxy teaches her friends that by making a few small changes and working together, the forest can be a better place for everyone. ',
        BgColour: 'bg-roxy',
		Price: 21.99
	}
];
