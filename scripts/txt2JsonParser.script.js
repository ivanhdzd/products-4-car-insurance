const { existsSync, mkdirSync, readFileSync, writeFileSync } = require('fs');
const { join, resolve } = require('path');

//#region MAIN

console.time('TXT file parsed');

const FILEPATH_ORIGIN = resolve(__dirname, '..', 'products_after_30_days.txt');
const DIR_PATH_DESTINATION = resolve(__dirname, '..', 'fixtures');
const FILEPATH_DESTINATION = join(DIR_PATH_DESTINATION, 'products.fixture.json');

if (!existsSync(FILEPATH_ORIGIN)) {
	console.error('File `%s` not found.', FILEPATH_ORIGIN);
	process.exit(1);
}

const content = readFileSync(FILEPATH_ORIGIN, { encoding: 'utf-8' });
const rows = content.split(/\n/g).filter(Boolean);
rows.shift();

const regExpDayDelimiter = /-+\sday\s\d+\s-+/;
const daysData = rows
	.reduce(reduceArraysPerDay, [])
	.map(mapDayArrayItems);

if (!existsSync(DIR_PATH_DESTINATION)) {
	console.warn('Creating `%s`directory...', DIR_PATH_DESTINATION);
	mkdirSync(DIR_PATH_DESTINATION);
}

const output = JSON.stringify(daysData, null, '\t');
writeFileSync(FILEPATH_DESTINATION, output, { encoding: 'utf-8' });

console.timeEnd('TXT file parsed');
process.exit();

//#endregion MAIN

//#region FUNCTIONS

function reduceArraysPerDay(acc, row) {
	if (regExpDayDelimiter.test(row)) {
		acc.push([]);
	} else {
		const index = acc.length - 1;
		acc[index].push(row);
	}
	return acc;
}

function mapDayArrayItems(rows) {
	const keys = rows.shift().split(/\,/g);
	return rows
		.map(row => row.split(/\,/g))
		.map((cells) => cells.reduce((acc, cell, index) => {
			const key = keys[index].trim();
			let value = cell.trim();
			if (!isNaN(value)) value = +value;
			acc[key] = value;
			return acc;
		}, { }));
}

//#endregion FUNCTIONS