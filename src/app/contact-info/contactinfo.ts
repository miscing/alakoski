export interface ContactInfo {
	company :CompanyInfo
	employees :Employee[];
}

export interface CompanyInfo {
	name :string;
	phone :string;
	email :string;
	area :string;
	ytunnus :string;
}

export interface Employee {
	title :string;
	firstName :string;
	surName :string;
	pic :string; //url of image location
	phone :string; //url of image location
	email :string;
}
