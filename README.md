# Phone Number Generator - Tool

This tool was made to satisfy a personal need to obtain a "nice" phone number. The tool generates phone numbers based on the criteria provided allowing you to forward them to the provider to check for availability. The tool follows the slovenia format (area) (segment1) (segment2).

## Usage

1. Open numbers.js
2. Customize parameters according to the "Generation instructions" following the example provided
3. The script will generate all possible combinations. There WILL be duplicates!

### Generation instructions

seg1 = fixed (area) prefix - Always the same in all generations
x y z = first segment (can be array or fixes const)
a b c = second segment (can be array or fixes const)

Example:
  const seg1 = ['069']; // First segment of the phone numer is always one of these options

  const x = [9];
  const y = [9];
  const z = [6];
  
  const a = [9];
  const b = [9];
  const c = [6, 9];

// Would generate "069 996 996 & 069 996 999"

## Authors

- [Aiken Tine Ahac](https://github.com/aikenahac) - Original creator
- [Matic Bončina](https://github.com/maticboncina) - User
