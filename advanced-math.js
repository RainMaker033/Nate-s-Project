const ADVANCED_MATH_DATA = {
  "questions": [
    {
      "id": 1,
      "question": "A rectangle has a length that is 3 times its width. The function A(w) = 3w² represents this situation, where A is the area, in square feet, of the rectangle and w is the width. Which of the following is the best interpretation of 3w in this context?",
      "answers": ["A. The length of the rectangle, in feet", "B. The area of the rectangle, in square feet", "C. The difference between the length and the width of the rectangle, in feet", "D. The width of the rectangle, in feet"],
      "correctAnswer": "A",
      "rationale": "Choice A is correct. The area of a rectangle is length × width. If the length is 3 times the width (l = 3w), then the area is A = l × w = (3w) × w = 3w². Therefore, in the function A(w) = 3w², the term 3w represents the length of the rectangle.",
      "hasImage": false
    },
    {
      "id": 2,
      "question": "v = -w/(150x) The given equation relates the distinct positive numbers v, w, and x. Which equation correctly expresses w in terms of v and x?",
      "answers": ["A. w = -150vx", "B. w = -150v/x", "C. w = -x/(150v)", "D. w = v + 150x"],
      "correctAnswer": "A",
      "rationale": "Choice A is correct. Multiplying each side of the given equation by -150x yields -150xv = w, which is equivalent to w = -150vx.",
      "hasImage": false
    },
    {
      "id": 3,
      "question": "A system of equations consists of a quadratic equation and a linear equation. The equations in this system are graphed in the xy-plane above. How many solutions does this system have?",
      "answers": ["A. 0", "B. 1", "C. 2", "D. 3"],
      "correctAnswer": "C",
      "rationale": "Choice C is correct. The solutions to a system of two equations correspond to points where the graphs of the equations intersect. The given graphs intersect at 2 points; therefore, the system has 2 solutions.",
      "hasImage": true
    },
    {
      "id": 4,
      "question": "y = x + 1 y = x² + x If (x, y) is a solution to the system of equations above, which of the following could be the value of x?",
      "answers": ["A. -1", "B. 0", "C. 2", "D. 3"],
      "correctAnswer": "A",
      "rationale": "Choice A is correct. Setting the expressions for y equal to each other gives x + 1 = x² + x. Subtracting x from both sides yields 1 = x², so x = 1 or x = -1. Of these, only -1 is given as a choice.",
      "hasImage": false
    },
    {
      "id": 5,
      "question": "4a² + 20ab + 25b² Which of the following is a factor of the polynomial above?",
      "answers": ["A. a + b", "B. 2a + 5b", "C. 4a + 5b", "D. 4a + 25b"],
      "correctAnswer": "B",
      "rationale": "Choice B is correct. The polynomial is a perfect square trinomial: (2a)² + 2(2a)(5b) + (5b)² = (2a + 5b)². Therefore, (2a + 5b) is a factor.",
      "hasImage": false
    },
    {
      "id": 6,
      "question": "If p = 3x + 4 and v = x + 5, which of the following is equivalent to pv - 2p + v?",
      "answers": ["A. 3x² + 12x + 7", "B. 3x² + 14x + 17", "C. 3x² + 19x + 20", "D. 3x² + 26x + 33"],
      "correctAnswer": "B",
      "rationale": "Choice B is correct. Substituting the values for p and v into the expression pv - 2p + v yields (3x + 4)(x + 5) - 2(3x + 4) + x + 5. Expanding and combining like terms gives 3x² + 14x + 17.",
      "hasImage": false
    },
    {
      "id": 7,
      "question": "x² - x - 1 = 0 What values satisfy the equation above?",
      "answers": ["A. x = 1 and x = 2", "B. x = -1/2 and x = 3/2", "C. x = (1 + √5)/2 and x = (1 - √5)/2", "D. x = (-1 + √5)/2 and x = (-1 - √5)/2"],
      "correctAnswer": "C",
      "rationale": "Choice C is correct. Using the quadratic formula: x = [1 ± √(1 + 4)]/2 = (1 ± √5)/2.",
      "hasImage": false
    },
    {
      "id": 8,
      "question": "The product of two positive integers is 462. If the first integer is 5 greater than twice the second integer, what is the smaller of the two integers?",
      "answers": ["14"],
      "correctAnswer": "14",
      "rationale": "Let the integers be α and y, with α = 2y + 5 and αy = 462. Substituting gives (2y + 5)y = 462, or 2y² + 5y - 462 = 0. Factoring yields (2y + 33)(y - 14) = 0, so y = 14 (since it must be positive). The integers are 14 and 33, so the smaller is 14.",
      "hasImage": false
    },
    {
      "id": 9,
      "question": "The function g is defined by g(x) = |x|/a - 14, where a < 0. What is the product of g(15a) and g(7a)?",
      "answers": ["609"],
      "correctAnswer": "609",
      "rationale": "Since a < 0, |a|/a = -1. Thus g(15a) = 15(|a|/a) - 14 = 15(-1) - 14 = -29, and g(7a) = 7(|a|/a) - 14 = 7(-1) - 14 = -21. The product is (-29)(-21) = 609.",
      "hasImage": false
    },
    {
      "id": 10,
      "question": "x: -27, -9, 21 g(x): 3, 0, 5 The table shows three values of x and their corresponding values of g(x), where g(x) = f(x)/(x+3) and f is a linear function. What is the y-intercept of the graph of y = f(x) in the xy-plane?",
      "answers": ["A. (0, 36)", "B. (0, 12)", "C. (0, 4)", "D. (0, -9)"],
      "correctAnswer": "A",
      "rationale": "From the table: f(-27) = -72 and f(-9) = 0. The slope m = (0 - (-72))/(-9 - (-27)) = 72/18 = 4. Using f(x) = 4x + b and point (-9, 0): 0 = 4(-9) + b, so b = 36. The y-intercept is (0, 36).",
      "hasImage": false
    },
    {
      "id": 11,
      "question": "h(x) = 2(x - 4)² - 32 The quadratic function h is defined as shown. In the xy-plane, the graph of y = h(x) intersects the x-axis at the points (0,0) and (t,0), where t is a constant. What is the value of t?",
      "answers": ["A. 1", "B. 2", "C. 4", "D. 8"],
      "correctAnswer": "D",
      "rationale": "Set h(t) = 0: 2(t - 4)² - 32 = 0 → 2(t - 4)² = 32 → (t - 4)² = 16 → t - 4 = 4 → t = 8.",
      "hasImage": false
    },
    {
      "id": 12,
      "question": "Which expression is equivalent to (8x(x-7) - 3(x-7))/(2x-14), where x > 7?",
      "answers": ["A. (x-7)/5", "B. (8x-3)/2", "C. (8x² - 3x - 14)/(2x-14)", "D. (8x² - 3x - 77)/(2x-14)"],
      "correctAnswer": "B",
      "rationale": "The denominator factors as 2(x-7). The expression becomes [ (x-7)(8x-3) ] / [ 2(x-7) ] = (8x-3)/2 for x > 7.",
      "hasImage": false
    },
    {
      "id": 13,
      "question": "f(x) = x² - 48x + 2,304 What is the minimum value of the given function?",
      "answers": ["1728"],
      "correctAnswer": "1728",
      "rationale": "Complete the square: f(x) = (x - 24)² + 2,304 - 576 = (x - 24)² + 1,728. The minimum value is 1,728.",
      "hasImage": false
    },
    {
      "id": 14,
      "question": "2|4 - x| + 3|4 - x| = 25 What is the positive solution to the given equation?",
      "answers": ["9"],
      "correctAnswer": "9",
      "rationale": "Combine terms: 5|4 - x| = 25 → |4 - x| = 5. So 4 - x = 5 → x = -1, or 4 - x = -5 → x = 9. The positive solution is 9.",
      "hasImage": false
    },
    {
      "id": 15,
      "question": "The function f is defined by f(x) = (-8)(2)^x + 22. What is the y-intercept of the graph of y = f(x) in the xy-plane?",
      "answers": ["A. (0, 14)", "B. (0, 2)", "C. (0, 22)", "D. (0, -8)"],
      "correctAnswer": "A",
      "rationale": "The y-intercept occurs when x = 0: f(0) = (-8)(1) + 22 = -8 + 22 = 14. So the y-intercept is (0, 14).",
      "hasImage": false
    },
    {
      "id": 16,
      "question": "An auditorium has seats for 1,800 people. Tickets to attend a show at the auditorium currently cost $4.00. For each $1.00 increase to the ticket price, 100 fewer tickets will be sold. This situation can be modeled by the equation y = -100x² + 1,400x + 7,200 where x represents the increase in ticket price, in dollars, and y represents the revenue, in dollars, from ticket sales. If this equation is graphed in the xy-plane, at what value of x is the maximum of the graph?",
      "answers": ["A. 4", "B. 7", "C. 14", "D. 18"],
      "correctAnswer": "B",
      "rationale": "For a quadratic in the form y = ax² + bx + c, the x-coordinate of the vertex is -b/(2a) = -1,400/(2(-100)) = 7.",
      "hasImage": false
    },
    {
      "id": 17,
      "question": "x² - 2x - 9 = 0 One solution to the given equation can be written as 1 + √k, where k is a constant. What is the value of k?",
      "answers": ["A. 8", "B. 10", "C. 20", "D. 40"],
      "correctAnswer": "B",
      "rationale": "Complete the square: x² - 2x = 9 → x² - 2x + 1 = 10 → (x - 1)² = 10 → x = 1 ± √10. So k = 10.",
      "hasImage": false
    },
    {
      "id": 18,
      "question": "p(x) + 57 = x² The given equation relates the value of x and its corresponding value of p(x) for the function p. What is the minimum value of the function p?",
      "answers": ["A. -3,249", "B. -57", "C. 57", "D. 3,249"],
      "correctAnswer": "B",
      "rationale": "Rewriting gives p(x) = x² - 57. This is a parabola opening upward with vertex at (0, -57), so the minimum value is -57.",
      "hasImage": false
    },
    {
      "id": 19,
      "question": "In the xy-plane, a line with equation 2y = 4.5 intersects a parabola at exactly one point. If the parabola has equation y = -4x² + bx, where b is a positive constant, what is the value of b?",
      "answers": ["6"],
      "correctAnswer": "6",
      "rationale": "The line is y = 2.25. Substitute into the parabola: 2.25 = -4x² + bx → 4x² - bx + 2.25 = 0. For one intersection, the discriminant must be zero: b² - 4(4)(2.25) = 0 → b² - 36 = 0 → b² = 36 → b = 6 (since b > 0).",
      "hasImage": false
    },
    {
      "id": 20,
      "question": "f(x) = 9,000(0.66)^x The given function f models the number of advertisements a company sent to its clients each year, where x represents the number of years since 1997, and 0 ≤ x ≤ 5. If y = f(x) is graphed in the xy-plane, which of the following is the best interpretation of the y-intercept of the graph in this context?",
      "answers": ["A. The minimum estimated number of advertisements the company sent to its clients during the 5 years was 1,708.", "B. The minimum estimated number of advertisements the company sent to its clients during the 5 years was 9,000.", "C. The estimated number of advertisements the company sent to its clients in 1997 was 1,708.", "D. The estimated number of advertisements the company sent to its clients in 1997 was 9,000."],
      "correctAnswer": "D",
      "rationale": "The y-intercept occurs when x = 0, which corresponds to the year 1997. f(0) = 9,000(1) = 9,000, which is the estimated number of advertisements in 1997.",
      "hasImage": false
    },
    {
      "id": 21,
      "question": "The first term of a sequence is 9. Each term after the first is 4 times the preceding term. If w represents the nth term of the sequence, which equation gives w in terms of n?",
      "answers": ["A. w = 4(9^n)", "B. w = 4(9^{n-1})", "C. w = 9(4^n)", "D. w = 9(4^{n-1})"],
      "correctAnswer": "D",
      "rationale": "This is a geometric sequence with first term 9 and common ratio 4. The nth term is given by w = 9(4^{n-1}).",
      "hasImage": false
    },
    {
      "id": 22,
      "question": "The function f is defined by f(x) = a(2.2^x + 2.2^b), where a and b are integer constants and 0 < a < b. The functions g and h are equivalent to function f, where k and m are constants. Which of the following equations displays the y-coordinate of the y-intercept of the graph of y = f(x) in the xy-plane as a constant or coefficient? I. g(x) = a(2.2^x + k) II. h(x) = a(2.2)^x + m",
      "answers": ["A. I only", "B. II only", "C. I and II", "D. Neither I nor II"],
      "correctAnswer": "D",
      "rationale": "The y-intercept is f(0) = a(1 + 2.2^b) = a + a(2.2)^b. In I, k = 2.2^b ≠ f(0). In II, m = a(2.2)^b ≠ f(0). Neither displays the y-intercept as a constant or coefficient.",
      "hasImage": false
    },
    {
      "id": 23,
      "question": "A physics class is planning an experiment about a toy rocket. The equation y = -16(x - 5.6)² + 502 gives the estimated height y, in feet, of the toy rocket x seconds after it is launched into the air. Which of the following is the best interpretation of the vertex of the graph of the equation in the xy-plane?",
      "answers": ["A. This toy rocket reaches an estimated maximum height of 502 feet 16 seconds after it is launched into the air.", "B. This toy rocket reaches an estimated maximum height of 502 feet 5.6 seconds after it is launched into the air.", "C. This toy rocket reaches an estimated maximum height of 16 feet 502 seconds after it is launched into the air.", "D. This toy rocket reaches an estimated maximum height of 5.6 feet 502 seconds after it is launched into the air."],
      "correctAnswer": "B",
      "rationale": "The equation is in vertex form y = a(x - h)² + k with vertex (h, k) = (5.6, 502). Since a = -16 < 0, the parabola opens downward, so the vertex represents a maximum. This means the rocket reaches a maximum height of 502 feet at 5.6 seconds.",
      "hasImage": false
    },
    {
      "id": 24,
      "question": "x - y = 1 x + y = x² - 3 Which ordered pair is a solution to the system of equations above?",
      "answers": ["A. (1 + √3, √3)", "B. (√3, -√3)", "C. (1 + √5, √5)", "D. (√5, -1 + √5)"],
      "correctAnswer": "A",
      "rationale": "From the first equation, x = y + 1. Substitute into the second: (y + 1) + y = (y + 1)² - 3 → 2y + 1 = y² + 2y + 1 - 3 → 0 = y² - 3 → y² = 3 → y = ±√3. If y = √3, then x = 1 + √3. The ordered pair (1 + √3, √3) is a solution.",
      "hasImage": false
    },
    {
      "id": 25,
      "question": "Which of the following is equivalent to the expression x⁴ - x² - 6?",
      "answers": ["A. (x² + 1)(x² - 6)", "B. (x² + 2)(x² - 3)", "C. (x² + 3)(x² - 2)", "D. (x² + 6)(x² - 1)"],
      "correctAnswer": "B",
      "rationale": "Factor: x⁴ - x² - 6 = (x² - 3)(x² + 2). Check: (x²)(x²) = x⁴, and -3(2) = -6, and -3x² + 2x² = -x².",
      "hasImage": false
    },
    {
      "id": 26,
      "question": "(2x + 5)² - (x - 2) + 2(x + 3) Which of the following is equivalent to the expression above?",
      "answers": ["A. 4x² + 21x + 33", "B. 4x² + 21x + 29", "C. 4x² + x + 29", "D. 4x² + x + 33"],
      "correctAnswer": "A",
      "rationale": "Expand: (2x + 5)² = 4x² + 20x + 25. Then - (x - 2) = -x + 2, and + 2(x + 3) = 2x + 6. Combine: 4x² + (20x - x + 2x) + (25 + 2 + 6) = 4x² + 21x + 33.",
      "hasImage": false
    },
    {
      "id": 27,
      "question": "Time (years): 0, 1, 2 Total amount (dollars): 604.00, 606.42, 608.84 Rosa opened a savings account at a bank. The table shows the exponential relationship between the time t, in years, since Rosa opened the account and the total amount n, in dollars, in the account. If Rosa made no additional deposits or withdrawals, which of the following equations best represents the relationship between t and n?",
      "answers": ["A. n = (1 + 604)^t", "B. n = (1 + 0.004)^t", "C. n = 604(1 + 0.004)^t", "D. n = 0.004(1 + 604)^t"],
      "correctAnswer": "C",
      "rationale": "When t = 0, n = 604, so the initial amount is 604. From t=0 to t=1, the growth factor is 606.42/604 ≈ 1.004, so n = 604(1.004)^t.",
      "hasImage": false
    },
    {
      "id": 28,
      "question": "(ax + 3)(5x² - bx + 4) = 20x³ - 9x² - 2x + 12 The equation above is true for all x, where a and b are constants. What is the value of ab?",
      "answers": ["A. 18", "B. 20", "C. 24", "D. 40"],
      "correctAnswer": "C",
      "rationale": "Expanding the left side gives 5ax³ - abx² + 4ax + 15x² - 3bx + 12. The x² term is -abx² + 15x². Set coefficient equal to -9: -ab + 15 = -9 → ab = 24.",
      "hasImage": false
    },
    {
      "id": 29,
      "question": "x² - 12x + 27 = 0 How many distinct real solutions does the given equation have?",
      "answers": ["A. Exactly two", "B. Exactly one", "C. Zero", "D. Infinitely many"],
      "correctAnswer": "A",
      "rationale": "The discriminant is (-12)² - 4(1)(27) = 144 - 108 = 36 > 0, so there are two distinct real solutions.",
      "hasImage": false
    },
    {
      "id": 30,
      "question": "x: -1, 0, 1, 2 g(x): 25, 1, 1/25, 1/625 For the exponential function g, the table shows four values of x and their corresponding values of g(x). Which equation defines g?",
      "answers": ["A. g(x) = -25^x", "B. g(x) = -(1/25)^x", "C. g(x) = 25^x", "D. g(x) = (1/25)^x"],
      "correctAnswer": "D",
      "rationale": "When x=0, g(x)=1, so the coefficient is 1. When x=1, g(x)=1/25, so the base is 1/25. Thus g(x) = (1/25)^x.",
      "hasImage": false
    },
    {
      "id": 31,
      "question": "Which of the following expressions is equivalent to x² - 5?",
      "answers": ["A. (x + √5)²", "B. (x - √5)²", "C. (x + √5)(x - √5)", "D. (x + 5)(x - 1)"],
      "correctAnswer": "C",
      "rationale": "This is a difference of squares: x² - 5 = x² - (√5)² = (x + √5)(x - √5).",
      "hasImage": false
    },
    {
      "id": 32,
      "question": "Which of the following expressions is(are) a factor of 3x² + 20x - 63? I. x - 9 II. 3x - 7",
      "answers": ["A. I only", "B. II only", "C. I and II", "D. Neither I nor II"],
      "correctAnswer": "B",
      "rationale": "Factor the quadratic: 3x² + 20x - 63 = (3x - 7)(x + 9). So (3x - 7) is a factor, but (x - 9) is not.",
      "hasImage": false
    },
    {
      "id": 33,
      "question": "√x⁵ = a/b If ³√x⁴ for all positive values of x, what is the value of a/b?",
      "answers": ["7/6"],
      "correctAnswer": "7/6",
      "rationale": "√x⁵ = x^(5/2) and ³√x⁴ = x^(4/3). So x^(5/2) / x^(4/3) = x^(5/2 - 4/3) = x^(15/6 - 8/6) = x^(7/6). Thus a/b = 7/6.",
      "hasImage": false
    },
    {
      "id": 34,
      "question": "x: 0, 2, 4 h(x): 1.23, 1.54, 1.94 The table shows the exponential relationship between the number of years, x, since Hana started training in pole vault, and the estimated height h(x), in meters, of her best pole vault for that year. Which of the following functions best represents this relationship, where x ≤ 4?",
      "answers": ["A. h(x) = 1.12(0.23)^x", "B. h(x) = 1.12(1.23)^x", "C. h(x) = 1.23(0.12)^x", "D. h(x) = 1.23(1.12)^x"],
      "correctAnswer": "D",
      "rationale": "When x=0, h(x)=1.23, so the initial value is 1.23. The ratio h(2)/h(0) = 1.54/1.23 ≈ 1.252, so the base is √1.252 ≈ 1.12. Thus h(x) = 1.23(1.12)^x.",
      "hasImage": false
    },
    {
      "id": 35,
      "question": "Function f is defined by f(x) = -a^x + b, where a and b are constants. In the xy-plane, the graph of y = f(x) - 12 has a y-intercept at (0, -75/7). The product of a and b is 320/7. What is the value of a?",
      "answers": ["20"],
      "correctAnswer": "20",
      "rationale": "y = f(x) - 12 = -a^x + b - 12. The y-intercept is when x=0: -1 + b - 12 = -75/7 → b - 13 = -75/7 → b = 16/7. Given ab = 320/7, so a(16/7) = 320/7 → a = 20.",
      "hasImage": false
    },
    {
      "id": 36,
      "question": "f(x) = (x - 44)(x - 46) The function f is defined by the given equation. For what value of x does f(x) reach its minimum?",
      "answers": ["A. 46", "B. 45", "C. 44", "D. -1"],
      "correctAnswer": "B",
      "rationale": "Expand: f(x) = x² - 90x + 2024. The x-coordinate of the vertex is -b/(2a) = 90/2 = 45.",
      "hasImage": false
    },
    {
      "id": 37,
      "question": "f(x) = 4,000(0.75)^x An entomologist recommended a program to reduce a certain invasive beetle population in an area. The given function estimates this beetle species' population x years after 2012, where x ≤ 7. Which of the following is the best interpretation of 4,000 in this context?",
      "answers": ["A. The estimated initial beetle population for this species and area in 2012", "B. The estimated beetle population for this species and area 7 years after 2012", "C. The estimated percent decrease in the beetle population for this species and area each year after 2012", "D. The estimated percent decrease in the beetle population for this species and area every 7 years after 2012"],
      "correctAnswer": "A",
      "rationale": "When x=0 (which represents 2012), f(0) = 4,000(1) = 4,000. So 4,000 is the initial population in 2012.",
      "hasImage": false
    },
    {
      "id": 38,
      "question": "The function f(t) = 40,000(2)^(t/790) gives the number of bacteria in a population t minutes after an initial observation. How much time, in minutes, does it take for the number of bacteria in the population to double?",
      "answers": ["A. 2", "B. 790", "C. 1,580", "D. 40,000"],
      "correctAnswer": "B",
      "rationale": "The population doubles when the exponent increases by 1, since the base is 2. The exponent is t/790, so it increases by 1 when t increases by 790.",
      "hasImage": false
    },
    {
      "id": 39,
      "question": "A company has a newsletter. In January 2018, there were 1,300 customers subscribed to the newsletter. For the next 24 months after January 2018, the total number of customers subscribed to the newsletter each month was 7% greater than the total number subscribed the previous month. Which equation gives the total number of customers, c, subscribed to the company's newsletter m months after January 2018, where m ≤ 24?",
      "answers": ["A. c = 1,300(0.07)^m", "B. c = 1,300(1.07)^m", "C. c = 1,300(1.7)^m", "D. c = 1,300(7)^m"],
      "correctAnswer": "B",
      "rationale": "This is exponential growth with initial value 1,300 and growth factor 1.07 (for 7% increase). So c = 1,300(1.07)^m.",
      "hasImage": false
    },
    {
      "id": 40,
      "question": "1/(x² + 10x + 25) = 4 If x is a solution to the given equation, which of the following is a possible value of x + 5?",
      "answers": ["A. 1/2", "B. 5/2", "C. 9/2", "D. 11/2"],
      "correctAnswer": "A",
      "rationale": "The denominator is (x+5)². So 1/(x+5)² = 4 → (x+5)² = 1/4 → x+5 = ±1/2. A possible value is 1/2.",
      "hasImage": false
    },
    {
      "id": 41,
      "question": "√(k - x) = 58 - x In the given equation, k is a constant. The equation has exactly one real solution. What is the minimum possible value of 4k?",
      "answers": ["231"],
      "correctAnswer": "231",
      "rationale": "Square both sides: k - x = (58 - x)² → k = x² - 115x + 3364. For one solution, the discriminant of this quadratic in x must be zero: (-115)² - 4(1)(3364 - k) = 0 → 13225 - 13456 + 4k = 0 → 4k - 231 = 0 → 4k = 231.",
      "hasImage": false
    },
    {
      "id": 42,
      "question": "f(x) = (x - 1)(x + 3)(x - 2) In the xy-plane, when the graph of the function f, where y = f(x), is shifted up 6 units, the resulting graph is defined by the function g. If the graph of y = g(x) crosses through the point (4, b), where b is a constant, what is the value of b?",
      "answers": ["48"],
      "correctAnswer": "48",
      "rationale": "g(x) = f(x) + 6. So g(4) = f(4) + 6 = (3)(7)(2) + 6 = 42 + 6 = 48.",
      "hasImage": false
    },
    {
      "id": 43,
      "question": "Which of the following expressions is equivalent to 8x¹⁰ - 8x⁹ + 88x?",
      "answers": ["A. x(7x¹⁰ - 7x⁹ + 87x)", "B. x(8¹⁰ - 8⁹ + 88)", "C. 8x(x¹⁰ - x⁹ + 11x)", "D. 8x(x⁹ - x⁸ + 11)"],
      "correctAnswer": "D",
      "rationale": "Factor out the greatest common factor 8x: 8x(x⁹ - x⁸ + 11).",
      "hasImage": false
    },
    {
      "id": 44,
      "question": "A rectangular volleyball court has an area of 162 square meters. If the length of the court is twice the width, what is the width of the court, in meters?",
      "answers": ["A. 9", "B. 18", "C. 27", "D. 54"],
      "correctAnswer": "A",
      "rationale": "Let w be the width, then length = 2w. Area = (2w)(w) = 2w² = 162 → w² = 81 → w = 9.",
      "hasImage": false
    },
    {
      "id": 45,
      "question": "A machine launches a softball from ground level. The softball reaches a maximum height of 51.84 meters above the ground at 1.8 seconds and hits the ground at 3.6 seconds. Which equation represents the height above ground h, in meters, of the softball t seconds after it is launched?",
      "answers": ["A. h = -t² + 3.6", "B. h = -t² + 51.84", "C. h = -16(t - 1.8)² - 3.6", "D. h = -16(t - 1.8)² + 51.84"],
      "correctAnswer": "D",
      "rationale": "The vertex is (1.8, 51.84) and the parabola opens downward. In vertex form: h = a(t - 1.8)² + 51.84. Use point (3.6, 0) to find a: 0 = a(1.8)² + 51.84 → 3.24a = -51.84 → a = -16. So h = -16(t - 1.8)² + 51.84.",
      "hasImage": false
    },
    {
      "id": 46,
      "question": "The function f is defined by f(x) = a^x + b, where a and b are constants. In the xy-plane, the graph of y = f(x) has an x-intercept at (2, 0) and a y-intercept at (0, -323). What is the value of b?",
      "answers": ["-324"],
      "correctAnswer": "-324",
      "rationale": "The y-intercept gives f(0) = a⁰ + b = 1 + b = -323 → b = -324.",
      "hasImage": false
    },
    {
      "id": 47,
      "question": "For the exponential function f, the value of f(0) is c, where c is a constant. Of the following equations that define the function f, which equation shows the value of c as the coefficient or the base?",
      "answers": ["A. f(x) = 22(1.5)^{x+1}", "B. f(x) = 33(1.5)^x", "C. f(x) = 49.5(1.5)^{x-1}", "D. f(x) = 74.25(1.5)^{x-2}"],
      "correctAnswer": "B",
      "rationale": "f(0) is the value when x=0. For B, f(0) = 33(1.5)⁰ = 33(1) = 33, so c=33 is the coefficient.",
      "hasImage": false
    },
    {
      "id": 48,
      "question": "S(n) = 38,000 a^n The function S above models the annual salary, in dollars, of an employee n years after starting a job, where a is a constant. If the employee's salary increases by 4% each year, what is the value of a?",
      "answers": ["A. 0.04", "B. 0.4", "C. 1.04", "D. 1.4"],
      "correctAnswer": "C",
      "rationale": "A 4% increase means multiplying by 1.04 each year. So a = 1.04.",
      "hasImage": false
    },
    {
      "id": 49,
      "question": "During a 5-second time interval, the average acceleration a, in meters per second squared, of an object with an initial velocity of 12 meters per second is defined by the equation a = (V_f - 12)/5, where V_f is the final velocity of the object in meters per second. If the equation is rewritten in the form V_f = xa + y, where x and y are constants, what is the value of x?",
      "answers": ["5"],
      "correctAnswer": "5",
      "rationale": "a = (V_f - 12)/5 → Multiply both sides by 5: 5a = V_f - 12 → V_f = 5a + 12. So x = 5.",
      "hasImage": false
    },
    {
      "id": 50,
      "question": "The expression 90y⁵ - 54y⁴ is equivalent to ry⁴(15y - 9), where r is a constant. What is the value of r?",
      "answers": ["6"],
      "correctAnswer": "6",
      "rationale": "Expand the right side: ry⁴(15y - 9) = 15ry⁵ - 9ry⁴. Compare coefficients with 90y⁵ - 54y⁴: 15r = 90 → r = 6.",
      "hasImage": false
    }
  ]
};
