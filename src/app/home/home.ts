export interface Home {
	motto :TxtImg;
	content :string[];
	contact :string;
	examples: TxtImg[];
	post: string[];
}

export interface TxtImg {
	txt :string;
	alt :string;
	img :string;
}
