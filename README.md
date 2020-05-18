> A minimalistic package to find a local peak in a 1-dimensional or 2-dimensional array if it exists.

## Highlights

- Fast, 2kB
- Accepts 1-dimensional or 2-dimensional arrays as input
- Ability to auto-determine the dimension of given input
- Clean and focused

## Install

```console
$ npm install peak-finder
```

## Usage

PeakFinder is quite easy to use. Once you have the module imported, you can directly invoke the function by providing the desired input that you would like to find a local peak in.

```js
const peakFinder = require('peak-finder');

// 1-D array
const input_1d = [6, 4, 2, 0, 3, 4];
const [localPeak, localPeakIndex] = peakFinder(input_1d);
// localPeak = 6, localPeakIndex = 0
.
.
.
.
// 2-D array
const input_2d = [
	[0, 2, 1, 11],
	[2, 5, 2, 3],
	[6, 2, 5, 8],
	[9, 0, 0, 10]
];
const [localPeak, [localPeakRowIndex, localPeakColumnIndex]] = peakFinder(input_2d);
// localPeak = 9, [localPeakRowIndex, localPeakColumnIndex] = [3, 0]
```

## FAQ
1. It returns [-1. -1]?
No peak could not be found.
2. It returns [-1. [-1, -1]]?
This could be due to a couple of reason: no peak could not be found, or irregularities in the size of the input array. Make sure all the rows are of the same length, and all the columns are of the same length.

## Origin story

One fine night, I woke up to the revelation of having to self-improve my proficiency in algorithms. In my not-so-extensive search, I stumbled upon [MIT Open CourseWare]([https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/index.htm](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/index.htm)) and embarked on a journey which led to the creation of this package and more similar packages that provided focused, clean, and minimalistic solutions to algorithms and data structures for JS.

## Maintainers

- [Goudam Muralitharan](https://github.com/jakiron)