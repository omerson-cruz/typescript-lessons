import fs from 'fs';

export class CsvFileReader {
	data: string[][] = []

	constructor(public filename: string) {

	}

	read(): void {
		this.data = fs.readFileSync()
	}
}