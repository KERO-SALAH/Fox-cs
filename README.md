Here is how you can generate Pascal's Triangle using recursion in Java:

### Recursive Formula:
We can use the recursive formula to calculate the value at any position in Pascal's Triangle:

\[
C(i, j) = C(i - 1, j - 1) + C(i - 1, j)
\]

Base cases:
- \( C(i, 0) = 1 \) (first element in any row).
- \( C(i, i) = 1 \) (last element in any row).

### Recursive Java Program:
Here is a Java program that prints Pascal's Triangle using recursion:

```java
public class PascalsTriangleRecursive {

    // Recursive function to calculate the value of C(i, j)
    public static int pascal(int i, int j) {
        // Base case: if j == 0 or j == i, return 1
        if (j == 0 || j == i) {
            return 1;
        }
        // Recursive case: sum of the two values above the current value
        return pascal(i - 1, j - 1) + pascal(i - 1, j);
    }

    // Function to print Pascal's Triangle up to a given number of rows
    public static void printPascalsTriangle(int rows) {
        // Loop through each row
        for (int i = 0; i < rows; i++) {
            // Print leading spaces for alignment
            for (int j = 0; j < rows - i - 1; j++) {
                System.out.print(" ");
            }

            // Loop through each element in the current row and print it
            for (int j = 0; j <= i; j++) {
                System.out.print(pascal(i, j) + " ");
            }

            // Move to the next line after each row
            System.out.println();
        }
    }

    public static void main(String[] args) {
        // Example: Print Pascal's Triangle with 5 rows
        int rows = 5;
        printPascalsTriangle(rows);
    }
}
```

### Explanation:

1. **Recursive Function**:
   - The function `pascal(int i, int j)` calculates the value at position \(C(i, j)\) in Pascal's Triangle.
   - **Base Case**: If \( j = 0 \) or \( j = i \), the function returns 1 because the first and last elements in every row are always 1.
   - **Recursive Case**: If the element is not on the boundary (i.e., not the first or last in the row), the function calls itself recursively to find the values above it:  
     \[
     C(i, j) = C(i - 1, j - 1) + C(i - 1, j)
     \]

2. **Printing the Triangle**:
   - In the function `printPascalsTriangle(int rows)`, the outer loop runs for each row, and the inner loop prints the elements in the row.
   - The leading spaces are printed to align the triangle correctly.

3. **Example Output** (with 5 rows):
```
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
```

### How It Works:
- The program calls the `printPascalsTriangle(5)` function, which in turn calls the `pascal(i, j)` function to calculate the values in Pascal's Triangle using recursion.
- For example, to calculate \( C(4, 2) \), the program will recursively call `pascal(3, 1)` and `pascal(3, 2)` until it reaches the base cases.

### Recursive Tree Example:
If you calculate \( C(4, 2) \), the recursion tree looks like this:

```
C(4, 2) = C(3, 1) + C(3, 2)
           /  \
     C(2, 0) C(2, 1)  C(2, 1) C(2, 2)
        |      / \        |      |
      1      1   2      1      1
```

This recursive approach is simple and clear, but it can be inefficient for large values of \(i\) and \(j\) due to repeated calculations. You could improve this using dynamic programming or memoization to store previously calculated values.

Let me know if you need more details or improvements!
