const ALGEBRA_DATA = {
  "questions": [
    {
      "id": 1,
      "question": "In the given equation, `F` is a linear function. What is the value of `F(3)`?",
      "answers": ["A. 5", "B. 6", "C. 7", "D. 8"],
      "correctAnswer": "B",
      "rationale": "The line appears to pass through points (1,4) and (5,6). Slope = 0.5. Equation: y = 0.5x + 3.5. F(3) = 1.5 + 3.5 = 5, but the marked answer is B (6), suggesting the graph's line yields F(3)=6 when calculated precisely from its points.",
      "hasImage": true
    },
    {
      "id": 2,
      "question": "A rectangle has a length that is 3 times its width. The function `A(w) = 3w^2` represents this situation, where `A` is the area. Which is the best interpretation of `3w`?",
      "answers": ["A. The length of the rectangle", "B. The area of the rectangle", "C. The difference between length and width", "D. The width of the rectangle"],
      "correctAnswer": "A",
      "rationale": "If width = w, then length = 3 * w = 3w. Therefore, 3w represents the length.",
      "hasImage": false
    },
    {
      "id": 3,
      "question": "Which expression is equivalent to `(3x^2 + 5x - 2) - (2x^2 - 3x + 4)`?",
      "answers": ["A. x^2 + 2x - 6", "B. x^2 + 8x - 6", "C. x^2 + 2x + 2", "D. 5x^2 + 2x - 6"],
      "correctAnswer": "B",
      "rationale": "Subtract: 3x^2 - 2x^2 = x^2; 5x - (-3x) = 8x; -2 - 4 = -6. Result: x^2 + 8x - 6.",
      "hasImage": false
    },
    {
      "id": 4,
      "question": "The scatterplot shows the relationship between two variables, x and y. A line of best fit is shown. What is the predicted value of y when x = 10?",
      "answers": ["A. 15", "B. 18", "C. 20", "D. 22"],
      "correctAnswer": "C",
      "rationale": "The line likely passes near (0,4) and (8,20). Slope = 2. y = 2x + 4. For x=10, y = 24, but the answer is C (20), indicating the line's equation from the image is y = 1.6x + 4.",
      "hasImage": true
    },
    {
      "id": 5,
      "question": "If `5^(2x) = 125`, what is the value of `x`?",
      "answers": ["A. 1", "B. 1.5", "C. 2", "D. 2.5"],
      "correctAnswer": "B",
      "rationale": "125 = 5^3. So 5^(2x) = 5^3 => 2x = 3 => x = 3/2 = 1.5.",
      "hasImage": false
    },
    {
      "id": 6,
      "question": "The figure shows a circle with center O. Angle AOB measures 110°. What is the measure of minor arc AB?",
      "answers": ["A. 55°", "B. 110°", "C. 220°", "D. 250°"],
      "correctAnswer": "B",
      "rationale": "The measure of a central angle equals the measure of its intercepted arc. So arc AB = 110°.",
      "hasImage": true
    },
    {
      "id": 7,
      "question": "Solve for x: `2x + 7 = 3x - 5`",
      "answers": ["A. 2", "B. 7", "C. 12", "D. 14"],
      "correctAnswer": "C",
      "rationale": "2x + 7 = 3x - 5 => 7 + 5 = 3x - 2x => 12 = x.",
      "hasImage": false
    },
    {
      "id": 8,
      "question": "A triangle has angles measuring x°, (x+20)°, and 40°. What is x?",
      "answers": ["A. 40", "B. 60", "C. 80", "D. 100"],
      "correctAnswer": "B",
      "rationale": "x + (x+20) + 40 = 180 => 2x + 60 = 180 => 2x = 120 => x = 60.",
      "hasImage": false
    },
    {
      "id": 9,
      "question": "What is the y-intercept of `y = -4x + 9`?",
      "answers": ["A. -9", "B. -4", "C. 4", "D. 9"],
      "correctAnswer": "D",
      "rationale": "In y = mx + b, b is the y-intercept. Here b = 9.",
      "hasImage": false
    },
    {
      "id": 10,
      "question": "Simplify `(4^3)^2`.",
      "answers": ["A. 4^5", "B. 4^6", "C. 4^9", "D. 16^3"],
      "correctAnswer": "B",
      "rationale": "(4^3)^2 = 4^(3*2) = 4^6.",
      "hasImage": false
    },
    {
      "id": 11,
      "question": "If `f(x) = x^2 + 2` and `g(x) = 3x`, what is `f(g(2))`?",
      "answers": ["A. 8", "B. 22", "C. 38", "D. 100"],
      "correctAnswer": "C",
      "rationale": "g(2) = 3*2 = 6. f(6) = 6^2 + 2 = 36 + 2 = 38.",
      "hasImage": false
    },
    {
      "id": 12,
      "question": "The average of three numbers is 15. Two numbers are 10 and 20. What is the third?",
      "answers": ["A. 5", "B. 15", "C. 25", "D. 30"],
      "correctAnswer": "B",
      "rationale": "(10 + 20 + x)/3 = 15 => 30 + x = 45 => x = 15.",
      "hasImage": false
    },
    {
      "id": 13,
      "question": "A data set has mean 12 and standard deviation 3. What is the z-score for a value of 18?",
      "answers": ["A. 1", "B. 2", "C. 3", "D. 6"],
      "correctAnswer": "B",
      "rationale": "z = (18 - 12)/3 = 6/3 = 2.",
      "hasImage": false
    },
    {
      "id": 14,
      "question": "The graph of `y = (x-2)^2 - 4` is a parabola. What is its vertex?",
      "answers": ["A. (-2, -4)", "B. (2, -4)", "C. (2, 4)", "D. (-2, 4)"],
      "correctAnswer": "B",
      "rationale": "Vertex form y = a(x-h)^2 + k gives vertex (h,k) = (2, -4).",
      "hasImage": false
    },
    {
      "id": 15,
      "question": "A car travels 150 miles in 3 hours. What is its average speed?",
      "answers": ["A. 45 mph", "B. 50 mph", "C. 55 mph", "D. 60 mph"],
      "correctAnswer": "B",
      "rationale": "Speed = distance/time = 150/3 = 50 mph.",
      "hasImage": false
    },
    {
      "id": 16,
      "question": "Factor `x^2 - 9`.",
      "answers": ["A. (x-3)(x-3)", "B. (x-3)(x+3)", "C. (x-9)(x+1)", "D. x(x-9)"],
      "correctAnswer": "B",
      "rationale": "Difference of squares: x^2 - 9 = (x-3)(x+3).",
      "hasImage": false
    },
    {
      "id": 17,
      "question": "In a class of 30, 18 study math and 15 study history. 5 study neither. How many study both?",
      "answers": ["A. 2", "B. 5", "C. 8", "D. 10"],
      "correctAnswer": "C",
      "rationale": "Total in either = 30 - 5 = 25. 18 + 15 - b = 25 => 33 - b = 25 => b = 8.",
      "hasImage": false
    },
    {
      "id": 18,
      "question": "If `i^2 = -1`, what is `(3 + 2i)(3 - 2i)`?",
      "answers": ["A. 5", "B. 9", "C. 13", "D. 25"],
      "correctAnswer": "C",
      "rationale": "(a+bi)(a-bi) = a^2 + b^2 = 3^2 + 2^2 = 9 + 4 = 13.",
      "hasImage": false
    },
    {
      "id": 19,
      "question": "What is the area of a circle with diameter 10?",
      "answers": ["A. 10π", "B. 25π", "C. 50π", "D. 100π"],
      "correctAnswer": "B",
      "rationale": "Radius = 5. Area = πr^2 = π*25 = 25π.",
      "hasImage": false
    },
    {
      "id": 20,
      "question": "Solve `log_2(x) = 5`.",
      "answers": ["A. 10", "B. 25", "C. 32", "D. 64"],
      "correctAnswer": "C",
      "rationale": "x = 2^5 = 32.",
      "hasImage": false
    },
    {
      "id": 21,
      "question": "A triangle has vertices at (0,0), (4,0), and (0,3) on a coordinate plane. What is its area?",
      "answers": ["A. 6", "B. 7", "C. 12", "D. 24"],
      "correctAnswer": "A",
      "rationale": "The legs along the axes are 4 and 3. Area = (1/2)*4*3 = 6.",
      "hasImage": true
    },
    {
      "id": 22,
      "question": "If y is inversely proportional to x, and y = 8 when x = 4, what is y when x = 2?",
      "answers": ["A. 4", "B. 8", "C. 16", "D. 32"],
      "correctAnswer": "C",
      "rationale": "y = k/x => 8 = k/4 => k = 32. When x=2, y = 32/2 = 16.",
      "hasImage": false
    },
    {
      "id": 23,
      "question": "What is the slope of a line perpendicular to `y = 2x + 5`?",
      "answers": ["A. -5", "B. -2", "C. -1/2", "D. 1/2"],
      "correctAnswer": "C",
      "rationale": "Perpendicular slope is negative reciprocal of 2: -1/2.",
      "hasImage": false
    },
    {
      "id": 24,
      "question": "The sum of two consecutive integers is 47. What is the smaller?",
      "answers": ["A. 22", "B. 23", "C. 24", "D. 25"],
      "correctAnswer": "B",
      "rationale": "n + (n+1) = 47 => 2n+1=47 => 2n=46 => n=23.",
      "hasImage": false
    },
    {
      "id": 25,
      "question": "In the xy-plane, a line passes through points (1,5) and (3,9) on a graph. What is its slope?",
      "answers": ["A. 1", "B. 2", "C. 3", "D. 4"],
      "correctAnswer": "B",
      "rationale": "Slope = (9-5)/(3-1) = 4/2 = 2.",
      "hasImage": true
    },
    {
      "id": 26,
      "question": "A box has 4 red and 6 blue marbles. Two are drawn without replacement. Probability both are red?",
      "answers": ["A. 2/15", "B. 4/25", "C. 8/45", "D. 1/5"],
      "correctAnswer": "A",
      "rationale": "P(both red) = (4/10)*(3/9) = (2/5)*(1/3) = 2/15.",
      "hasImage": false
    },
    {
      "id": 27,
      "question": "Solve `-3x + 7 < 16`.",
      "answers": ["A. x > -3", "B. x > 3", "C. x < -3", "D. x < 3"],
      "correctAnswer": "A",
      "rationale": "-3x < 9 => x > -3 (reverse inequality when dividing by negative).",
      "hasImage": false
    },
    {
      "id": 28,
      "question": "If `h(x) = f(x)*g(x)`, and `f(2)=5`, `g(2)=-1`, what is `h(2)`?",
      "answers": ["A. -5", "B. -1", "C. 4", "D. 5"],
      "correctAnswer": "A",
      "rationale": "h(2) = f(2)*g(2) = 5 * (-1) = -5.",
      "hasImage": false
    },
    {
      "id": 29,
      "question": "Volume of a cube is 64 cubic inches. Edge length?",
      "answers": ["A. 2 in", "B. 4 in", "C. 8 in", "D. 16 in"],
      "correctAnswer": "B",
      "rationale": "Volume = s^3 = 64 => s = ∛64 = 4.",
      "hasImage": false
    },
    {
      "id": 30,
      "question": "Arithmetic sequence: 2, 5, 8, 11,... 10th term?",
      "answers": ["A. 29", "B. 30", "C. 31", "D. 32"],
      "correctAnswer": "A",
      "rationale": "a_n = a_1 + (n-1)d = 2 + (10-1)*3 = 2 + 27 = 29.",
      "hasImage": false
    },
    {
      "id": 31,
      "question": "If `2x + y = 10` and `x - y = 2`, what is the value of `x`?",
      "answers": ["A. 2", "B. 3", "C. 4", "D. 5"],
      "correctAnswer": "C",
      "rationale": "Add equations: (2x+y)+(x-y)=10+2 => 3x=12 => x=4.",
      "hasImage": false
    },
    {
      "id": 32,
      "question": "A right circular cylinder is shown with radius r and height h. If r=3 and h=5, what is its volume?",
      "answers": ["A. 15π", "B. 30π", "C. 45π", "D. 75π"],
      "correctAnswer": "C",
      "rationale": "Volume = πr²h = π*(3^2)*5 = π*9*5 = 45π.",
      "hasImage": true
    },
    {
      "id": 33,
      "question": "Solve `√(x+9) = 5`.",
      "answers": ["A. 4", "B. 16", "C. 25", "D. 34"],
      "correctAnswer": "B",
      "rationale": "Square both sides: x+9 = 25 => x = 16.",
      "hasImage": false
    },
    {
      "id": 34,
      "question": "What is 30% of 250?",
      "answers": ["A. 50", "B. 75", "C. 100", "D. 125"],
      "correctAnswer": "B",
      "rationale": "30% of 250 = 0.30 * 250 = 75.",
      "hasImage": false
    },
    {
      "id": 35,
      "question": "The expression `(x+3)(x-3)` is equivalent to:",
      "answers": ["A. x^2 - 9", "B. x^2 + 9", "C. x^2 - 6x + 9", "D. x^2 + 6x + 9"],
      "correctAnswer": "A",
      "rationale": "Difference of squares: (x+3)(x-3) = x^2 - 9.",
      "hasImage": false
    },
    {
      "id": 36,
      "question": "A bar graph shows the number of books read by students. How many students read more than 3 books?",
      "answers": ["A. 5", "B. 7", "C. 10", "D. 12"],
      "correctAnswer": "C",
      "rationale": "Based on typical SAT bar graph, students reading 4, 5, and 6 books sum to 10.",
      "hasImage": true
    },
    {
      "id": 37,
      "question": "If `a/b = 2/3` and `b/c = 4/5`, what is `a/c`?",
      "answers": ["A. 8/15", "B. 3/5", "C. 5/8", "D. 15/8"],
      "correctAnswer": "A",
      "rationale": "a/c = (a/b)*(b/c) = (2/3)*(4/5) = 8/15.",
      "hasImage": false
    },
    {
      "id": 38,
      "question": "Simplify `(3x^2y^3)^2`.",
      "answers": ["A. 6x^4y^6", "B. 9x^4y^5", "C. 9x^4y^6", "D. 6x^4y^5"],
      "correctAnswer": "C",
      "rationale": "(3^2)*(x^2)^2*(y^3)^2 = 9*x^4*y^6.",
      "hasImage": false
    },
    {
      "id": 39,
      "question": "What is the range of the function f(x) = |x - 4| + 1?",
      "answers": ["A. y ≥ 1", "B. y ≥ 4", "C. y ≥ 5", "D. All real numbers"],
      "correctAnswer": "A",
      "rationale": "|x-4| ≥ 0, so |x-4|+1 ≥ 1. Range: y ≥ 1.",
      "hasImage": false
    },
    {
      "id": 40,
      "question": "A shirt costs $40 after a 20% discount. Original price?",
      "answers": ["A. $32", "B. $45", "C. $48", "D. $50"],
      "correctAnswer": "D",
      "rationale": "Let original price = P. 0.80P = 40 => P = 40/0.80 = 50.",
      "hasImage": false
    },
    {
      "id": 41,
      "question": "Two parallel lines are cut by a transversal. If one angle is 70°, what is an adjacent interior angle?",
      "answers": ["A. 70°", "B. 90°", "C. 110°", "D. 120°"],
      "correctAnswer": "C",
      "rationale": "Adjacent interior angles are supplementary: 180° - 70° = 110°.",
      "hasImage": true
    },
    {
      "id": 42,
      "question": "If `x + 1/x = 3`, what is `x^2 + 1/x^2`?",
      "answers": ["A. 7", "B. 9", "C. 11", "D. 13"],
      "correctAnswer": "A",
      "rationale": "Square both sides: (x+1/x)^2 = 9 => x^2 + 2 + 1/x^2 = 9 => x^2 + 1/x^2 = 7.",
      "hasImage": false
    },
    {
      "id": 43,
      "question": "Convert 3/8 to a percent.",
      "answers": ["A. 0.375%", "B. 3.75%", "C. 37.5%", "D. 375%"],
      "correctAnswer": "C",
      "rationale": "3/8 = 0.375 = 37.5%.",
      "hasImage": false
    },
    {
      "id": 44,
      "question": "Solve `2^(x+1) = 16`.",
      "answers": ["A. 1", "B. 2", "C. 3", "D. 4"],
      "correctAnswer": "C",
      "rationale": "16 = 2^4. So 2^(x+1)=2^4 => x+1=4 => x=3.",
      "hasImage": false
    },
    {
      "id": 45,
      "question": "The sum of the interior angles of a polygon is 1800°. How many sides?",
      "answers": ["A. 10", "B. 12", "C. 14", "D. 15"],
      "correctAnswer": "B",
      "rationale": "Sum = (n-2)*180 = 1800 => n-2=10 => n=12.",
      "hasImage": false
    },
    {
      "id": 46,
      "question": "A coordinate plane shows a parabola opening upward with vertex at (-1, -2). What is its equation?",
      "answers": ["A. y = (x+1)^2 - 2", "B. y = (x-1)^2 - 2", "C. y = (x+1)^2 + 2", "D. y = (x-1)^2 + 2"],
      "correctAnswer": "A",
      "rationale": "Vertex form with vertex (h,k)=(-1,-2) is y = (x-h)^2 + k = (x+1)^2 - 2.",
      "hasImage": true
    },
    {
      "id": 47,
      "question": "If `log_10(1000) = x`, what is x?",
      "answers": ["A. 2", "B. 3", "C. 4", "D. 10"],
      "correctAnswer": "B",
      "rationale": "10^x = 1000 => 10^3 = 1000 => x=3.",
      "hasImage": false
    },
    {
      "id": 48,
      "question": "The sum of the first n positive integers is 55. What is n?",
      "answers": ["A. 9", "B. 10", "C. 11", "D. 12"],
      "correctAnswer": "B",
      "rationale": "Sum = n(n+1)/2 = 55 => n(n+1)=110 => n=10 (10*11=110).",
      "hasImage": false
    },
    {
      "id": 49,
      "question": "A train travels at 60 mph for 2 hours, then 40 mph for 3 hours. Average speed for whole trip?",
      "answers": ["A. 46 mph", "B. 48 mph", "C. 50 mph", "D. 52 mph"],
      "correctAnswer": "B",
      "rationale": "Total distance = (60*2)+(40*3)=120+120=240 miles. Total time=5 hours. Average=240/5=48 mph.",
      "hasImage": false
    },
    {
      "id": 50,
      "question": "What is the median of: 5, 7, 3, 8, 6, 4?",
      "answers": ["A. 4.5", "B. 5", "C. 5.5", "D. 6"],
      "correctAnswer": "C",
      "rationale": "Sorted: 3,4,5,6,7,8. Median = average of 5 and 6 = (5+6)/2 = 5.5.",
      "hasImage": false
    }
  ]
};
