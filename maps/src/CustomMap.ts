// import { Company } from "./Company";
// import { User } from "./User";


// Instructions to every other class
// on how they can be an argument to addMarker
export interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
	markerContent(): string;
	color: string;
}




export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0
			}
		});
	}

// this is the first solution to reusability without usig Interface yet
// and making our code DRY
	addMarker(mappable: Mappable): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: mappable.location.lat,
				lng: mappable.location.lng,
			}
		});

		// ADDING THE POPUP thingy when you click the marker
		marker.addListener('click', () => {
			const infoWindow = new google.maps.InfoWindow({
				content: mappable.markerContent()
			})

			infoWindow.open(this.googleMap, marker)
		})

	}

	// addUserMarker(user: User): void {
	// 	new google.maps.Marker({
	// 		map: this.googleMap,
	// 		position: {
	// 			lat: user.location.lat,
	// 			lng: user.location.lng,
	// 		}
	// 	});
	// }


	// you'll notice that we have code repeating here. We're not being DRY here.
	// addCompanyMarker(company: Company): void {
	// 	new google.maps.Marker({
	// 		map: this.googleMap,
	// 		position: {
	// 			lat: company.location.lat,
	// 			lng: company.location.lng,
	// 		}
	// 	});
	// }
}