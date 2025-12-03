const GEOMETRY_DATA = {
  "questions": [
    {
      "id": 1,
      "question": "In the figure, AC = CD. The measure of angle EBC is 45°, and the measure of angle ACD is 104°. What is the value of α?",
      "answers": ["A. 83", "B. 97", "C. 76", "D. 104"],
      "correctAnswer": "A",
      "rationale": "The correct answer is 83. It's given that in the figure, AC = CD. Thus, triangle ACD is an isosceles triangle and the measure of angle CDA is equal to the measure of angle CAD. The sum of the measures of the interior angles of a triangle is 180°. Thus, the sum of the measures of the interior angles of triangle ACD is 180°. It's given that the measure of angle ACD is 104°. It follows that the sum of the measures of angles CDA and CAD is (180 - 104)°, or 76°. Since the measure of angle CDA is equal to the measure of angle CAD, the measure of angle CDA is half of 76°, or 38°. The sum of the measures of the interior angles of triangle BDE is 180°. It's given that the measure of angle EBC is 45°. Since the measure of angle BDE, which is the same angle as angle CDA, is 38°, it follows that the measure of angle DEB is (180 - 45 - 38)°, or 97°. Since angle DEB and angle AEB form a straight line, the sum of the measures of these angles is 180°. It's given in the figure that the measure of angle AEB is α. It follows that 97 + α = 180. Subtracting 97 from both sides of this equation yields α = 83.",
      "hasImage": true
    },
    {
      "id": 2,
      "question": "The length of each edge of a box is 29 inches. Each side of the box is in the shape of a square. The box does not have a lid. What is the exterior surface area, in square inches, of this box without a lid?",
      "answers": ["A. 841", "B. 1,682", "C. 2,523", "D. 4,205"],
      "correctAnswer": "D",
      "rationale": "The correct answer is 4,205. The exterior surface area of a figure is the sum of the areas of all its faces. It's given that the box does not have a lid and that each side of the box is in the shape of a square. Therefore, the box consists of 5 congruent square faces. It's also given that the length of each edge is 29 inches. The area of each square face is 29² = 841 square inches. Since the box consists of 5 congruent square faces, it follows that the sum of the areas of all its faces, or the exterior surface area of this box without a lid, is 5(841) = 4,205 square inches.",
      "hasImage": false
    },
    {
      "id": 3,
      "question": "In the figure shown, points Q, R, S, and T lie on line segment PV, and line segment RU intersects line segment SX at point W. The measure of ∠SQX is 48°, the measure of ∠SXQ is 86°, the measure of ∠SWU is 85°, and the measure of ∠VTU is 162°. What is the measure, in degrees, of ∠TUR?",
      "answers": ["A. 97", "B. 108", "C. 123", "D. 139"],
      "correctAnswer": "C",
      "rationale": "The correct answer is 123. The triangle angle sum theorem states that the sum of the measures of the interior angles of a triangle is 180 degrees. It's given that the measure of ∠SQX is 48° and the measure of ∠SXQ is 86°. Since points S, Q, and X form a triangle, it follows from the triangle angle sum theorem that the measure of ∠QSX is 180 - 48 - 86 = 46°. It's also given that the measure of ∠SWU is 85°. Since ∠SWU and ∠SWR are supplementary angles, the sum of their measures is 180 degrees. It follows that the measure of ∠SWR is 180 - 85 = 95°. Since points R, S, and W form a triangle, and ∠RSW is the same angle as ∠QSX, it follows from the triangle angle sum theorem that the measure of ∠WRS is 180 - 46 - 95 = 39°. It's given that the measure of ∠VTU is 162°. Since ∠VTU and ∠STU are supplementary angles, the sum of their measures is 180 degrees. It follows that the measure of ∠STU is 180 - 162 = 18°. Since points R, T, and U form a triangle, and ∠URT is the same angle as ∠WRS, it follows from the triangle angle sum theorem that the measure of ∠TUR is 180 - 39 - 18 = 123°.",
      "hasImage": true
    },
    {
      "id": 4,
      "question": "Triangle FGH is similar to triangle JKL, where angle F corresponds to angle J and angles G and K are right angles. If sin(F) = 308/317, what is the value of sin(J)?",
      "answers": ["A. 75/317", "B. 308/317", "C. 317/308", "D. 317/75"],
      "correctAnswer": "B",
      "rationale": "Choice B is correct. If two triangles are similar, then their corresponding angles are congruent. It's given that right triangle FGH is similar to right triangle JKL and angle F corresponds to angle J. It follows that angle F is congruent to angle J and, therefore, the measure of angle F is equal to the measure of angle J. The sine ratios of angles of equal measure are equal. Since the measure of angle F is equal to the measure of angle J, sin(F) = sin(J). It's given that sin(F) = 308/317. Therefore, sin(J) is 308/317.",
      "hasImage": false
    },
    {
      "id": 5,
      "question": "Intersecting lines r, s, and t are shown below. What is the value of x?",
      "answers": ["A. 74", "B. 83", "C. 97", "D. 106"],
      "correctAnswer": "C",
      "rationale": "The correct answer is 97. The intersecting lines form a triangle, and the angle with measure of x° is an exterior angle of this triangle. The measure of an exterior angle of a triangle is equal to the sum of the measures of the two nonadjacent interior angles of the triangle. One of these angles has measure of 23° and the other, which is supplementary to the angle with measure 106°, has measure of 180° - 106° = 74°. Therefore, the value of x is 23 + 74 = 97.",
      "hasImage": true
    },
    {
      "id": 6,
      "question": "A right circular cylinder has a volume of 45π. If the height of the cylinder is 5, what is the radius of the cylinder?",
      "answers": ["A. 3", "B. 4.5", "C. 9", "D. 40"],
      "correctAnswer": "A",
      "rationale": "Choice A is correct. The volume of a right circular cylinder with a radius of r is the product of the area of the base, πr², and the height, h. The volume of the right circular cylinder described is 45π and its height is 5. If the radius is r, it follows that 45π = π(r)²(5). Dividing both sides of this equation by 5π yields 9 = r². Taking the square root of both sides yields r = 3 or r = -3. Since r represents the radius, the value must be positive. Therefore, the radius is 3.",
      "hasImage": false
    },
    {
      "id": 7,
      "question": "Square A has side lengths that are 166 times the side lengths of square B. The area of square A is k times the area of square B. What is the value of k?",
      "answers": ["A. 166", "B. 332", "C. 27,556", "D. 55,112"],
      "correctAnswer": "C",
      "rationale": "The correct answer is 27,556. The area of a square is s², where s is the side length of the square. Let x represent the length of each side of square B. Substituting x for s in s² yields x². It follows that the area of square B is x². It's given that square A has side lengths that are 166 times the side lengths of square B. Since x represents the length of each side of square B, the length of each side of square A can be represented by the expression 166x. It follows that the area of square A is (166x)², or 27,556x². It's given that the area of square A is k times the area of square B. Since the area of square A is equal to 27,556x², and the area of square B is equal to x², an equation representing the given statement is 27,556x² = kx². Since x represents the length of each side of square B, the value of x must be positive. Therefore, the value of x² is also positive, so it does not equal 0. Dividing by x² on both sides of the equation 27,556x² = kx² yields 27,556 = k. Therefore, the value of k is 27,556.",
      "hasImage": false
    },
    {
      "id": 8,
      "question": "In right triangle RST, the sum of the measures of angle R and angle S is 90 degrees. The value of sin(R) is √15/4. What is the value of cos(S)?",
      "answers": ["A. √15/15", "B. √15/4", "C. 4√15/15", "D. √15"],
      "correctAnswer": "B",
      "rationale": "Choice B is correct. The sine of any acute angle is equal to the cosine of its complement. It's given that in right triangle RST, the sum of the measures of angle R and angle S is 90 degrees. Therefore, angle R and angle S are complementary, and the value of sin R is equal to the value of cos S. It's given that the value of sin R is √15/4, so the value of cos S is also √15/4.",
      "hasImage": false
    },
    {
      "id": 9,
      "question": "What is the length of one side of a square that has the same area as a circle with radius 2?",
      "answers": ["A. 2", "B. √2π", "C. 2√π", "D. 2π"],
      "correctAnswer": "C",
      "rationale": "Choice C is correct. The area A of a circle with radius r is given by the formula A = πr². Thus, a circle with radius 2 has area π(2²) = 4π. The area of a square with side length s is given by the formula A = s². Thus, if a square has the same area as a circle with radius 2, then s² = 4π. Since the side length of a square must be a positive number, taking the square root of both sides of s² = 4π gives s = √4π. Using the properties of square roots, √4π can be rewritten as (√4)(√π) = 2√π. Therefore, s = 2√π.",
      "hasImage": false
    },
    {
      "id": 10,
      "question": "A right square prism has a height of 14 units. The volume of the prism is 2,016 cubic units. What is the length, in units, of an edge of the base?",
      "answers": ["A. 9", "B. 12", "C. 14", "D. 18"],
      "correctAnswer": "B",
      "rationale": "The correct answer is 12. The volume, V, of a right square prism can be calculated using the formula V = s²h, where s represents the length of an edge of the base and h represents the height of the prism. It's given that the volume of the prism is 2,016 cubic units and the height is 14 units. Substituting 2,016 for V and 14 for h in the formula V = s²h yields 2,016 = (s²)(14). Dividing both sides of this equation by 14 yields 144 = s². Taking the square root of both sides of this equation yields two solutions: -12 = s and 12 = s. The length can't be negative, so 12 = s. Therefore, the length, in units, of an edge of the base is 12.",
      "hasImage": false
    },
    {
      "id": 11,
      "question": "In triangle XYZ, angle Z is a right angle and the length of YZ is 24 units. If tan X = 12/35, what is the perimeter, in units, of triangle XYZ?",
      "answers": ["A. 188", "B. 168", "C. 84", "D. 71"],
      "correctAnswer": "B",
      "rationale": "Choice B is correct. It's given that angle Z in triangle XYZ is a right angle. Thus, side YZ is the leg opposite angle X and side XZ is the leg adjacent to angle X. The tangent of an acute angle in a right triangle is the ratio of the length of the leg opposite the angle to the length of the leg adjacent to the angle. It follows that tan X = YZ/XZ. It's given that tan X = 12/35 and the length of side YZ is 24 units. Substituting 12/35 for tan X and 24 for YZ in the equation tan X = YZ/XZ yields 12/35 = 24/XZ. Multiplying both sides of this equation by 35(XZ) yields 12(XZ) = 24(35), or 12(XZ) = 840. Dividing both sides of this equation by 12 yields XZ = 70. The length XY can be calculated using the Pythagorean theorem: 70² + 24² = c², or 4,900 + 576 = c², or 5,476 = c². Taking the square root yields c = 74. Therefore, the perimeter is 74 + 70 + 24 = 168 units.",
      "hasImage": false
    },
    {
      "id": 12,
      "question": "Triangle XYZ shown is a right triangle. Which of the following has the same value as sin X?",
      "answers": ["A. tan X", "B. tan Y", "C. cos X", "D. cos Y"],
      "correctAnswer": "D",
      "rationale": "Choice D is correct. The sine of an angle is equal to the cosine of its complementary angle. In the triangle shown, angle Z is a right angle; thus, angles X and Y are complementary angles. Therefore, cos Y has the same value as sin X.",
      "hasImage": true
    },
    {
      "id": 13,
      "question": "In the figure above, MQ and NR intersect at point P, NP = QP, and MP = PR. What is the measure, in degrees, of ∠QMR? (Disregard the degree symbol when gridding your answer.)",
      "answers": ["A. 15", "B. 30", "C. 45", "D. 60"],
      "correctAnswer": "B",
      "rationale": "The correct answer is 30. It is given that the measure of ∠QPR is 60°. Angle MPR and ∠QPR are collinear and therefore are supplementary angles. This means that the sum of the two angle measures is 180°, and so the measure of ∠MPR is 120°. The sum of the angles in a triangle is 180°. Subtracting the measure of ∠MPR from 180° yields the sum of the other angles in triangle MPR. Since 180 - 120 = 60, the sum of the measures of ∠QMR and ∠NRM is 60°. It is given that MP = PR, so it follows that triangle MPR is isosceles. Therefore ∠QMR and ∠NRM must be congruent. Since the sum of the measure of these two angles is 60°, it follows that the measure of each angle is 30°.",
      "hasImage": true
    },
    {
      "id": 14,
      "question": "Square X has a side length of 12 centimeters. The perimeter of square Y is 2 times the perimeter of square X. What is the length, in centimeters, of one side of square Y?",
      "answers": ["A. 6", "B. 10", "C. 14", "D. 24"],
      "correctAnswer": "D",
      "rationale": "Choice D is correct. The perimeter, P, of a square can be found using the formula P = 4s, where s is the length of each side of the square. It's given that square X has a side length of 12 centimeters. Substituting 12 for s in the formula for the perimeter of a square yields P = 4(12) = 48. Therefore, the perimeter of square X is 48 centimeters. It's also given that the perimeter of square Y is 2 times the perimeter of square X. Therefore, the perimeter of square Y is 2(48) = 96 centimeters. Substituting 96 for P in the formula P = 4s gives 96 = 4s. Dividing both sides of this equation by 4 gives 24 = s. Therefore, the length of one side of square Y is 24 centimeters.",
      "hasImage": false
    },
    {
      "id": 15,
      "question": "The circumference of the base of a right circular cylinder is 20π meters, and the height of the cylinder is 6 meters. What is the volume, in cubic meters, of the cylinder?",
      "answers": ["A. 60π", "B. 120π", "C. 600π", "D. 2,400π"],
      "correctAnswer": "C",
      "rationale": "Choice C is correct. The volume, V, of a right circular cylinder is given by the formula V = πr²h, where r is the radius of the base of the cylinder and h is the height of the cylinder. It's given that a right circular cylinder has a height of 6 meters. Therefore, h = 6. It's also given that the right circular cylinder has a base with a circumference of 20π meters. The circumference, C, of a circle is given by C = 2πr, where r is the radius of the circle. Substituting 20π for C in the formula C = 2πr yields 20π = 2πr. Dividing each side of this equation by 2π yields 10 = r. Substituting 10 for r and 6 for h in the formula V = πr²h yields V = π(10)²(6) = 600π. Therefore, the volume, in cubic meters, of the cylinder is 600π.",
      "hasImage": false
    },
    {
      "id": 16,
      "question": "In the figure, line q is parallel to line r, and both lines are intersected by line s. If y = 2x + 8, what is the value of x?",
      "answers": ["A. 38", "B. 57", "C. 66", "D. 114"],
      "correctAnswer": "B",
      "rationale": "The correct answer is 57. Based on the figure, the angle with measure y° and the angle vertical to the angle with measure 58° are same side interior angles. Since vertical angles are congruent, the angle vertical to the angle with measure 58° also has measure 58°. It's given that lines q and r are parallel. Therefore, same side interior angles between lines q and r are supplementary. It follows that y + 58 = 180. If y = 2x + 8, then the value of x can be found by substituting 2x + 8 for y in the equation y + 58 = 180, which yields (2x + 8) + 58 = 180, or 2x + 66 = 180. Subtracting 66 from both sides of this equation yields 2x = 114. Dividing both sides of this equation by 2 yields x = 57.",
      "hasImage": true
    },
    {
      "id": 17,
      "question": "In the figure above, AF, BE, and CD are parallel. Points B and E lie on AC and FD, respectively. If AB = 9, BC = 18.5, and FE = 8.5, what is the length of ED, to the nearest tenth?",
      "answers": ["A. 16.8", "B. 17.5", "C. 18.4", "D. 19.6"],
      "correctAnswer": "B",
      "rationale": "Choice B is correct. Since AF, BE, and CD are parallel, quadrilaterals AFEB and BEDC are similar. Let x represent the length of ED. With similar figures, the ratios of the lengths of corresponding sides are equal. It follows that 9/18.5 = 8.5/x. Multiplying both sides of this equation by 18.5 and by x yields 9x = (18.5)(8.5) or 9x = 157.25. Dividing both sides of this equation by 9 yields x = 17.47, which to the nearest tenth is 17.5.",
      "hasImage": true
    },
    {
      "id": 18,
      "question": "In the figure above, what is the value of tan(A)?",
      "answers": ["A. 20", "B. 29", "C. 20/21", "D. 21/20"],
      "correctAnswer": "C",
      "rationale": "Choice C is correct. Angle A is an acute angle in a right triangle, so the value of tan(A) is equivalent to the ratio of the length of the side opposite angle A, 20, to the length of the nonhypotenuse side adjacent to angle A, 21. Therefore, tan(A) = 20/21.",
      "hasImage": true
    },
    {
      "id": 19,
      "question": "A circle has a radius of 43 meters. What is the area, in square meters, of the circle?",
      "answers": ["A. 43π/2", "B. 43π", "C. 86π", "D. 1,849π"],
      "correctAnswer": "D",
      "rationale": "Choice D is correct. The area, A, of a circle is given by the formula A = πr², where r is the radius of the circle. It's given that the circle has a radius of 43 meters. Substituting 43 for r in the formula A = πr² yields A = π(43)² = 1,849π. Therefore, the area, in square meters, of the circle is 1,849π.",
      "hasImage": false
    },
    {
      "id": 20,
      "question": "A circle in the xy-plane has its center at (-1, 1). Line t is tangent to this circle at the point (5, -4). Which of the following points also lies on line t?",
      "answers": ["A. (0, 6/5)", "B. (4, 7)", "C. (10, 2)", "D. (11, 1)"],
      "correctAnswer": "C",
      "rationale": "Choice C is correct. It's given that the circle has its center at (-1, 1) and that line t is tangent to this circle at the point (5, -4). Therefore, the points (-1, 1) and (5, -4) are the endpoints of the radius of the circle at the point of tangency. The slope of this radius is (-4-1)/(5-(-1)) = -5/6. A line that's tangent to a circle is perpendicular to the radius of the circle at the point of tangency. It follows that line t is perpendicular to the radius at the point (5, -4), so the slope of line t is the negative reciprocal of -5/6, which is 6/5. Since the slope of line t is the same between any two points on line t, a point lies on line t if the slope of the line segment connecting the point and (5, -4) is 6/5. Substituting choice C, (10, 2), for (a, b) and (5, -4) for (c, d) in the expression (d-b)/(c-a) yields (-4-2)/(5-10) = -6/-5 = 6/5. Therefore, the point (10, 2) lies on line t.",
      "hasImage": false
    },
    {
      "id": 21,
      "question": "Points Q and R lie on a circle with center P. The radius of this circle is 9 inches. Triangle PQR has a perimeter of 31 inches. What is the length, in inches, of QR?",
      "answers": ["A. 13√2", "B. 13", "C. 9√2", "D. 9"],
      "correctAnswer": "B",
      "rationale": "Choice B is correct. Since it's given that P is the center of a circle with a radius of 9 inches, and that points Q and R lie on that circle, it follows that PQ and RP of triangle PQR each have a length of 9 inches. Let the length of QR be x inches. It follows that the perimeter of triangle PQR is 9 + 9 + x inches. Since it's given that the perimeter of triangle PQR is 31 inches, it follows that 9 + 9 + x = 31, or 18 + x = 31. Subtracting 18 from both sides of this equation gives x = 13. Therefore, the length, in inches, of QR is 13.",
      "hasImage": false
    },
    {
      "id": 22,
      "question": "The three points shown define a circle. The circumference of this circle is kπ, where k is a constant. What is the value of k?",
      "answers": ["A. 5", "B. 10", "C. 25", "D. 50"],
      "correctAnswer": "B",
      "rationale": "Choice B is correct. It's given that the three points shown define a circle, so the center of that circle is an equal distance from each of the three points. The point (0,0) is halfway between the points (5,0) and (-5,0) and is a distance of 5 units from each of those two points. The point (0,0) is also a distance of 5 units from (0,5). Because the point (0,0) is the same distance from all three given points, it must be the center of the circle. The radius of a circle is the distance from the center to any point on the circle. Since that distance is 5, it follows that the radius of the circle is 5. The circumference of a circle with radius r is equal to 2πr. It follows that the circumference of the circle is 2π(5) = 10π. It's given that the circumference of the circle is kπ. Therefore, the value of k is 10.",
      "hasImage": true
    },
    {
      "id": 23,
      "question": "What is the volume, in cubic centimeters, of a right rectangular prism that has a length of 4 centimeters, a width of 9 centimeters, and a height of 10 centimeters?",
      "answers": ["A. 23", "B. 120", "C. 360", "D. 720"],
      "correctAnswer": "C",
      "rationale": "The correct answer is 360. The volume of a right rectangular prism is calculated by multiplying its dimensions: length, width, and height. Multiplying the values given for these dimensions yields a volume of (4)(9)(10) = 360 cubic centimeters.",
      "hasImage": false
    },
    {
      "id": 24,
      "question": "A cube has an edge length of 68 inches. A solid sphere with a radius of 34 inches is inside the cube, such that the sphere touches the center of each face of the cube. To the nearest cubic inch, what is the volume of the space in the cube not taken up by the sphere?",
      "answers": ["A. 149,796", "B. 164,500", "C. 190,955", "D. 310,800"],
      "correctAnswer": "A",
      "rationale": "Choice A is correct. The volume of a cube can be found by using the formula V = s³, where V is the volume and s is the edge length of the cube. Therefore, the volume of the given cube is V = 68³ = 314,432 cubic inches. The volume of a sphere can be found by using the formula V = (4/3)πr³, where V is the volume and r is the radius of the sphere. Therefore, the volume of the given sphere is V = (4/3)π(34)³ ≈ 164,636 cubic inches. The volume of the space in the cube not taken up by the sphere is the difference between the volume of the cube and volume of the sphere. Subtracting the approximate volume of the sphere from the volume of the cube gives 314,432 - 164,636 = 149,796 cubic inches.",
      "hasImage": false
    },
    {
      "id": 25,
      "question": "In triangle ABC, the measure of angle B is 90° and BD is an altitude of the triangle. The length of AB is 15 and the length of AC is 23 greater than the length of AB. What is the value of BC/BD?",
      "answers": ["A. 15/38", "B. 15/23", "C. 23/15", "D. 38/15"],
      "correctAnswer": "D",
      "rationale": "Choice D is correct. It's given that in triangle ABC, the measure of angle B is 90° and BD is an altitude of the triangle. Therefore, the measure of angle BDC is 90°. It follows that angle B is congruent to angle D and angle C is congruent to angle C. By the angle-angle similarity postulate, triangle ABC is similar to triangle BDC. Since triangles ABC and BDC are similar, it follows that AC/AB = BC/BD. It's also given that the length of AB is 15 and the length of AC is 23 greater than the length of AB. Therefore, the length of AC is 15 + 23 = 38. Substituting 15 for AB and 38 for AC in the equation AC/AB = BC/BD yields 38/15 = BC/BD. Therefore, the value of BC/BD is 38/15.",
      "hasImage": true
    },
    {
      "id": 26,
      "question": "The figure shown is a right circular cylinder with a radius of r and height of h. A second right circular cylinder (not shown) has a volume that is 392 times as large as the volume of the cylinder shown. Which of the following could represent the radius R, in terms of r, and the height H, in terms of h, of the second cylinder?",
      "answers": ["A. R = 8r and H = 7h", "B. R = 8r and H = 49h", "C. R = 7r and H = 8h", "D. R = 49r and H = 8h"],
      "correctAnswer": "C",
      "rationale": "Choice C is correct. The volume of a right circular cylinder is equal to πa²b, where a is the radius of a base of the cylinder and b is the height of the cylinder. It's given that the cylinder shown has a radius of r and a height of h. It follows that the volume of the cylinder shown is equal to πr²h. It's given that the second right circular cylinder has a radius of R and a height of H. It follows that the volume of the second cylinder is equal to πR²H. Choice C gives R = 7r and H = 8h. Substituting 7r for R and 8h for H in the expression that represents the volume of the second cylinder yields π(7r)²(8h) = π(49r²)(8h) = π(392r²h) = 392(πr²h). This expression is equal to 392 times the volume of the cylinder shown, πr²h. Therefore, R = 7r and H = 8h could represent the radius R, in terms of r, and the height H, in terms of h, of the second cylinder.",
      "hasImage": true
    },
    {
      "id": 27,
      "question": "A right circular cylinder has a volume of 377 cubic centimeters. The area of the base of the cylinder is 13 square centimeters. What is the height, in centimeters, of the cylinder?",
      "answers": ["A. 13", "B. 29", "C. 37", "D. 49"],
      "correctAnswer": "B",
      "rationale": "The correct answer is 29. The volume, V, of a right circular cylinder is given by the formula V = πr²h, where r is the radius of the base of the cylinder and h is the height of the cylinder. Since the base of the cylinder is a circle with radius r, the area of the base of the cylinder is πr². It's given that a right circular cylinder has a volume of 377 cubic centimeters; therefore, V = 377. It's also given that the area of the base of the cylinder is 13 square centimeters; therefore, πr² = 13. Substituting 377 for V and 13 for πr² in the formula V = πr²h yields 377 = 13h. Dividing both sides of this equation by 13 yields 29 = h. Therefore, the height of the cylinder, in centimeters, is 29.",
      "hasImage": false
    },
    {
      "id": 28,
      "question": "Two nearby trees are perpendicular to the ground, which is flat. One of these trees is 10 feet tall and has a shadow that is 5 feet long. At the same time, the shadow of the other tree is 2 feet long. How tall, in feet, is the other tree?",
      "answers": ["A. 3", "B. 4", "C. 8", "D. 27"],
      "correctAnswer": "B",
      "rationale": "Choice B is correct. Each tree and its shadow can be modeled using a right triangle, where the height of the tree and the length of its shadow are the legs of the triangle. At a given point in time, the right triangles formed by two nearby trees and their respective shadows will be similar. Therefore, if the height of the other tree is α, in feet, the value of α can be calculated by solving the proportional relationship 10/5 = α/2. This equation is equivalent to 2 = α/2. Multiplying each side of the equation 2 = α/2 by 2 yields 4 = α. Therefore, the other tree is 4 feet tall.",
      "hasImage": false
    },
    {
      "id": 29,
      "question": "Triangle QPR is similar to triangle STR. The lengths represented by ST, QP, PR, and QR in the figure are 14, 15, 20, and 25, respectively. What is the length of SR?",
      "answers": ["A. 350/15", "B. 350/20", "C. 210/20", "D. 210/25"],
      "correctAnswer": "A",
      "rationale": "Choice A is correct. The figure shows that angle P in triangle QPR and angle T in triangle STR are right angles. It follows that angle P is congruent to angle T. The figure also shows that the measures of angle QRP and angle SRT are both α°. Therefore, angle QRP is congruent to angle SRT. It's given that triangle QPR is similar to triangle STR. Since angle P is congruent to angle T, and angle QRP is congruent to angle SRT, it follows that QR corresponds to SR, and QP corresponds to ST. Since corresponding sides of similar triangles are proportional, it follows that SR/QR = ST/QP. It's also given that the lengths of ST, QP, and QR are 14, 15, and 25, respectively. Substituting 14 for ST, 15 for QP, and 25 for QR in the equation SR/QR = ST/QP yields SR/25 = 14/15. Multiplying each side of this equation by 25 yields SR = (14/15)(25) = 350/15. Thus, the length of SR is 350/15.",
      "hasImage": true
    },
    {
      "id": 30,
      "question": "Triangle ABC is similar to triangle XYZ, where A, B, and C correspond to X, Y, and Z, respectively. In triangle ABC, the length of AB is 170 and the length of BC is 850. In triangle XYZ, the length of YZ is 60. What is the length of XY?",
      "answers": ["A. 204", "B. 182", "C. 60", "D. 12"],
      "correctAnswer": "D",
      "rationale": "Choice D is correct. It's given that triangle ABC is similar to triangle XYZ, where A, B, and C correspond to X, Y, and Z, respectively. It follows that side AB corresponds to side XY and side BC corresponds to side YZ. Since the lengths of corresponding sides in similar triangles are proportional, it follows that XY/AB = YZ/BC. Substituting 170 for AB, 60 for YZ, and 850 for BC in this equation yields XY/170 = 60/850. Multiplying each side of this equation by 170 yields XY = 12. Therefore, the length of XY is 12.",
      "hasImage": false
    },
    {
      "id": 31,
      "question": "In the figure, RT = TU, the measure of angle VST is 29°, and the measure of angle RVS is 41°. What is the value of x?",
      "answers": ["A. 139", "B. 148", "C. 156", "D. 164"],
      "correctAnswer": "C",
      "rationale": "The correct answer is 156. In the figure shown, the sum of the measures of angle UVS and angle RVS is 180°. It's given that the measure of angle RVS is 41°. Therefore, the measure of angle UVS is (180 - 41)° = 139°. The sum of the measures of the interior angles of a triangle is 180°. In triangle UVS, the measure of angle UVS is 139° and it's given that the measure of angle VST is 29°. Thus, the measure of angle VUS is (180 - 139 - 29)° = 12°. It's given that RT = TU. Therefore, triangle TUR is an isosceles triangle and the measure of VUS is equal to the measure of angle TRU. In triangle TUR, the measure of angle VUS is 12° and the measure of angle TRU is 12°. Thus, the measure of angle UTR is (180 - 12 - 12)° = 156°. The figure shows that the measure of angle UTR is x°, so the value of x is 156.",
      "hasImage": true
    },
    {
      "id": 32,
      "question": "In the figure shown, WZ and XY intersect at point Q. YQ = 63, WQ = 70, WX = 60, and XQ = 120. What is the length of YZ?",
      "answers": ["A. 42", "B. 48", "C. 54", "D. 60"],
      "correctAnswer": "C",
      "rationale": "The correct answer is 54. The figure shown includes two triangles, triangle WQX and triangle YQZ, such that angle WQX and angle YQZ are vertical angles. It follows that angle WQX is congruent to angle YQZ. It's also given in the figure that the measures of angle W and angle Y are a°. Therefore angle W is congruent to angle Y. Since triangle WQX and triangle YQZ have two pairs of congruent angles, triangle WQX is similar to triangle YQZ by the angle-angle similarity postulate, where YZ corresponds to WX, and YQ corresponds to WQ. Since the lengths of corresponding sides in similar triangles are proportional, it follows that YZ/WX = YQ/WQ. It's given that YQ = 63, WQ = 70, and WX = 60. Substituting 63 for YQ, 70 for WQ, and 60 for WX in the equation YZ/WX = YQ/WQ yields YZ/60 = 63/70. Multiplying each side of this equation by 60 yields YZ = (63/70)(60) = 54. Therefore, the length of YZ is 54.",
      "hasImage": true
    },
    {
      "id": 33,
      "question": "The circle above has center O, the length of arc ADC is 5π, and x = 100. What is the length of arc ABC?",
      "answers": ["A. 9π", "B. 13π", "C. 18π", "D. 13π/2"],
      "correctAnswer": "B",
      "rationale": "Choice B is correct. The ratio of the lengths of two arcs of a circle is equal to the ratio of the measures of the central angles that subtend the arcs. It's given that arc ADC is subtended by a central angle with measure 100°. Since the sum of the measures of the angles about a point is 360°, it follows that arc ABC is subtended by a central angle with measure 360° - 100° = 260°. If s is the length of arc ABC, then s must satisfy the ratio s/5π = 260/100. Reducing the fraction 260/100 to its simplest form gives 13/5. Therefore, s/5π = 13/5. Multiplying both sides of s/5π = 13/5 by 5π yields s = 13π.",
      "hasImage": true
    },
    {
      "id": 34,
      "question": "In triangles ABC and DEF, angles B and E each have measure 27° and angles C and F each have measure 41°. Which additional piece of information is sufficient to determine whether triangle ABC is congruent to triangle DEF?",
      "answers": ["A. The measure of angle A", "B. The length of side AB", "C. The lengths of sides BC and EF", "D. No additional information is necessary."],
      "correctAnswer": "C",
      "rationale": "Choice C is correct. Since angles B and E each have the same measure and angles C and F each have the same measure, triangles ABC and DEF are similar, where side BC corresponds to side EF. To determine whether two similar triangles are congruent, it is sufficient to determine whether one pair of corresponding sides are congruent. Therefore, to determine whether triangles ABC and DEF are congruent, it is sufficient to determine whether sides BC and EF have equal length. Thus, the lengths of BC and EF are sufficient to determine whether triangle ABC is congruent to triangle DEF.",
      "hasImage": false
    },
    {
      "id": 35,
      "question": "What is the value of cos A in the triangle shown?",
      "answers": ["A. 42/41", "B. 41/42", "C. 1/42", "D. 1/41"],
      "correctAnswer": "B",
      "rationale": "Choice B is correct. The cosine of an acute angle in a right triangle is defined as the ratio of the length of the leg adjacent to the angle to the length of the hypotenuse. In the triangle shown, the length of the leg adjacent to angle A is 41, and the length of the hypotenuse is 42. Therefore, cos A = 41/42.",
      "hasImage": true
    },
    {
      "id": 36,
      "question": "In triangle XYZ, angle Y is a right angle, the measure of angle Z is 33°, and the length of YZ is 26 units. If the area, in square units, of triangle XYZ can be represented by the expression k tan 33°, where k is a constant, what is the value of k?",
      "answers": ["A. 169", "B. 338", "C. 676", "D. 1,352"],
      "correctAnswer": "B",
      "rationale": "The correct answer is 338. The tangent of an acute angle in a right triangle is the ratio of the length of the leg opposite the angle to the length of the leg adjacent to the angle. In triangle XYZ, it's given that angle Y is a right angle. Thus, XY is the leg opposite of angle Z and YZ is the leg adjacent to angle Z. It follows that tan Z = XY/YZ. It's also given that the measure of angle Z is 33° and the length of YZ is 26 units. Substituting 33° for Z and 26 for YZ in the equation tan Z = XY/YZ yields tan 33° = XY/26. Multiplying each side of this equation by 26 yields 26 tan 33° = XY. Therefore, the length of XY is 26 tan 33°. The area of a triangle is half the product of the lengths of its legs. Since the length of YZ is 26 and the length of XY is 26 tan 33°, it follows that the area of triangle XYZ is (1/2)(26)(26 tan 33°) square units = 338 tan 33° square units. It's given that the area, in square units, of triangle XYZ can be represented by the expression k tan 33°, where k is a constant. Therefore, 338 is the value of k.",
      "hasImage": false
    },
    {
      "id": 37,
      "question": "Triangle ABC above is a right triangle, and sin(B) = 5/13. What is the length of side BC?",
      "answers": ["A. 10", "B. 12", "C. 24", "D. 26"],
      "correctAnswer": "C",
      "rationale": "The correct answer is 24. The sine of an acute angle in a right triangle is equal to the ratio of the length of the side opposite the angle to the length of the hypotenuse. In the triangle shown, the sine of angle B, or sin(B) = 5/13, is equal to the ratio of the length of side AC to the length of side AB. It's given that the length of side AB is 26 and that sin(B) = 5/13. Therefore, 5/13 = AC/26. Multiplying both sides of this equation by 26 yields AC = 10. By the Pythagorean Theorem, the relationship between the lengths of the sides of triangle ABC is as follows: 26² = 10² + BC², or 676 = 100 + BC². Subtracting 100 from both sides of 676 = 100 + BC² yields 576 = BC². Taking the square root of both sides of 576 = BC² yields 24 = BC.",
      "hasImage": true
    },
    {
      "id": 38,
      "question": "In triangles LMN and RST, angles L and R each have measure 60°, LN = 10, and RT = 30. Which additional piece of information is sufficient to prove that triangle LMN is similar to triangle RST?",
      "answers": ["A. MN = 7 and ST = 7", "B. MN = 7 and ST = 21", "C. The measures of angles M and S are 70° and 60°, respectively.", "D. The measures of angles M and T are 70° and 50°, respectively."],
      "correctAnswer": "D",
      "rationale": "Choice D is correct. Two triangles are similar if they have three pairs of congruent corresponding angles. It's given that angles L and R each measure 60°, and so these corresponding angles are congruent. If angle M is 70°, then angle N must be 50° so that the sum of the angles in triangle LMN is 180°. If angle T is 50°, then angle S must be 70° so that the sum of the angles in triangle RST is 180°. Therefore, if the measures of angles M and T are 70° and 50°, respectively, then corresponding angles M and S are both 70°, and corresponding angles N and T are both 50°. It follows that triangles LMN and RST have three pairs of congruent corresponding angles, and so the triangles are similar.",
      "hasImage": false
    },
    {
      "id": 39,
      "question": "The figure shows the lengths, in inches, of two sides of a right triangle. What is the area of the triangle, in square inches?",
      "answers": ["A. 7.5", "B. 8", "C. 15", "D. 30"],
      "correctAnswer": "A",
      "rationale": "The correct answer is 7.5. The area, A, of a triangle is given by the formula A = (1/2)bh, where b is the length of the base of the triangle and h is the height of the triangle. In the right triangle shown, the length of the base of the triangle is 5 inches, and the height is 3 inches. It follows that b = 5 and h = 3. Substituting 5 for b and 3 for h in the formula A = (1/2)bh yields A = (1/2)(5)(3) = 15/2 = 7.5. Therefore, the area of the triangle, in square inches, is 7.5.",
      "hasImage": true
    },
    {
      "id": 40,
      "question": "The graph of x² + x + y² + y = 199/2 in the xy-plane is a circle. What is the length of the circle's radius?",
      "answers": ["A. 5", "B. 10", "C. 15", "D. 20"],
      "correctAnswer": "B",
      "rationale": "The correct answer is 10. It's given that the graph of x² + x + y² + y = 199/2 in the xy-plane is a circle. The equation of a circle in the xy-plane can be written in the form (x - h)² + (y - k)² = r², where the coordinates of the center of the circle are (h, k) and the length of the radius of the circle is r. Completing the square: (x² + x + 1/4) + (y² + y + 1/4) = 199/2 + 1/4 + 1/4 = 199/2 + 1/2 = 200/2 = 100. This gives (x + 1/2)² + (y + 1/2)² = 100 = 10². Therefore, the length of the circle's radius is 10.",
      "hasImage": false
    },
    {
      "id": 41,
      "question": "The perimeter of an isosceles right triangle is 18 + 18√2 inches. What is the length, in inches, of the hypotenuse of this triangle?",
      "answers": ["A. 9", "B. 9√2", "C. 18", "D. 18√2"],
      "correctAnswer": "C",
      "rationale": "Choice C is correct. The perimeter of a triangle is the sum of the lengths of its sides. Since the given triangle is an isosceles right triangle, the length of each leg is the same and the length of the hypotenuse is equal to √2 times the length of a leg. Let x represent the length, in inches, of a leg of this isosceles right triangle. Therefore, the perimeter, in inches, of the triangle is x + x + x√2 = 2x + x√2 = x(2 + √2). It's given that the perimeter of this triangle is 18 + 18√2 inches. Thus, x(2 + √2) = 18 + 18√2. Dividing both sides of this equation by (2 + √2) yields x = (18 + 18√2)/(2 + √2). Multiplying the numerator and denominator by (2 - √2) yields x = 9√2. It follows that the length, in inches, of a leg of this isosceles right triangle is 9√2. Therefore, the length, in inches, of the hypotenuse of this isosceles right triangle is (9√2)(√2) = 18.",
      "hasImage": false
    },
    {
      "id": 42,
      "question": "A cube has an edge length of 41 inches. What is the volume, in cubic inches, of the cube?",
      "answers": ["A. 164", "B. 1,681", "C. 10,086", "D. 68,921"],
      "correctAnswer": "D",
      "rationale": "Choice D is correct. The volume, V, of a cube can be found using the formula V = s³, where s is the edge length of the cube. It's given that a cube has an edge length of 41 inches. Substituting 41 inches for s in this equation yields V = 41³ = 68,921 cubic inches. Therefore, the volume of the cube is 68,921 cubic inches.",
      "hasImage": false
    },
    {
      "id": 43,
      "question": "The length of the edge of the base of a right square prism is 6 units. The volume of the prism is 2,880 cubic units. What is the height, in units, of the prism?",
      "answers": ["A. 4√30", "B. 36", "C. 24√5", "D. 80"],
      "correctAnswer": "D",
      "rationale": "Choice D is correct. The volume, V, of a right square prism is given by the formula V = s²h, where s represents the length of the edge of the base and h represents the height of the prism. It's given that the volume of a right square prism is 2,880 cubic units and the length of the edge of the base is 6 units. Substituting 2,880 for V and 6 for s in the formula V = s²h yields 2,880 = (6²)h = 36h. Dividing both sides of this equation by 36 yields 80 = h. Therefore, the height, in units, of the prism is 80.",
      "hasImage": false
    },
    {
      "id": 44,
      "question": "A cylinder has a diameter of 8 inches and a height of 12 inches. What is the volume, in cubic inches, of the cylinder?",
      "answers": ["A. 16π", "B. 96π", "C. 192π", "D. 768π"],
      "correctAnswer": "C",
      "rationale": "Choice C is correct. The base of a cylinder is a circle with a diameter equal to the diameter of the cylinder. The volume, V, of a cylinder can be found by multiplying the area of the circular base, A, by the height of the cylinder, h, or V = Ah. The area of a circle can be found using the formula A = πr², where r is the radius of the circle. It's given that the diameter of the cylinder is 8 inches. Thus, the radius of this circle is 4 inches. Therefore, the area of the circular base of the cylinder is A = π(4)² = 16π square inches. It's given that the height h of the cylinder is 12 inches. Substituting 16π for A and 12 for h in the formula V = Ah gives V = 16π(12) = 192π cubic inches.",
      "hasImage": false
    },
    {
      "id": 45,
      "question": "Right triangle ABC is shown. What is the value of tan A?",
      "answers": ["A. √3/54", "B. 1/√3", "C. √3", "D. 27√3"],
      "correctAnswer": "C",
      "rationale": "Choice C is correct. In the triangle shown, the measure of angle B is 30° and angle C is a right angle, which means that it has a measure of 90°. Since the sum of the angles in a triangle is equal to 180°, the measure of angle A is equal to 180° - (30 + 90)° = 60°. In a right triangle whose acute angles have measures 30° and 60°, the lengths of the legs can be represented by the expressions x, x√3, and 2x, where x is the length of the leg opposite the angle with measure 30°, x√3 is the length of the leg opposite the angle with measure 60°, and 2x is the length of the hypotenuse. In the triangle shown, the hypotenuse has a length of 54. It follows that 2x = 54, or x = 27. Therefore, the length of the leg opposite angle B is 27 and the length of the leg opposite angle A is 27√3. The tangent of an acute angle in a right triangle is defined as the ratio of the length of the leg opposite the angle to the length of the leg adjacent to the angle. The length of the leg opposite angle A is 27√3 and the length of the leg adjacent to angle A is 27. Therefore, the value of tan A is 27√3/27 = √3.",
      "hasImage": true
    },
    {
      "id": 46,
      "question": "Square A has side lengths that are 246 times the side lengths of square B. The area of square A is k times the area of square B. What is the value of k?",
      "answers": ["A. 60,516", "B. 492", "C. 246", "D. 123"],
      "correctAnswer": "A",
      "rationale": "Choice A is correct. The area of a square is s², where s is the side length of the square. Therefore, the area of square B is b², where b is the side length of square B. It's given that square A has side lengths that are 246 times the side lengths of square B. Therefore, the side length of square A can be represented by the expression 246b. It follows that the area of square A is (246b)² = 60,516b². It's given that the area of square A is k times the area of square B, so 60,516b² = kb². Therefore, the value of k is 60,516.",
      "hasImage": false
    },
    {
      "id": 47,
      "question": "A manufacturing company produces two sizes of cylindrical containers that each have a height of 50 centimeters. The radius of container A is 16 centimeters, and the radius of container B is 25% longer than the radius of container A. What is the volume, in cubic centimeters, of container B?",
      "answers": ["A. 16,000π", "B. 20,000π", "C. 25,000π", "D. 31,250π"],
      "correctAnswer": "B",
      "rationale": "Choice B is correct. If the radius of container A is 16 centimeters and the radius of container B is 25% longer than the radius of container A, then the radius of container B is 16 + (0.25)(16) = 20 centimeters. The volume of a cylinder is πr²h, where r is the radius of the cylinder and h is its height. Substituting r = 20 and h = 50 into πr²h yields that the volume of cylinder B is π(20)²(50) = 20,000π cubic centimeters.",
      "hasImage": false
    },
    {
      "id": 48,
      "question": "Point F lies on a unit circle in the xy-plane and has coordinates (1,0). Point G is the center of the circle and has coordinates (0,0). Point H also lies on the circle and has coordinates (-1,y), where y is a constant. Which of the following could be the positive measure of angle FGH, in radians?",
      "answers": ["A. 27π/2", "B. 29π/2", "C. 24π", "D. 25π"],
      "correctAnswer": "D",
      "rationale": "Choice D is correct. It's given that the circle is a unit circle, which means the circle has a radius of 1. It's also given that point G is the center of the circle and has coordinates (0,0) and that point H lies on the circle and has coordinates (-1,y). Since the radius of the circle is 1, the value of y must be 0, as all other points with an x-coordinate of -1 are a distance greater than 1 away from point G. Since F and H are points on the unit circle centered at G, let side FG be the starting side of the angle and side GH be the terminal side of the angle. Since side FG is on the positive x-axis and side GH is on the negative x-axis, side FG is half of a rotation around the unit circle, or π radians, away from side GH. Therefore, the positive measure of angle FGH, in radians, is equal to π plus an integer multiple of 2π. In other words, the positive measure of angle FGH, in radians, is an odd integer multiple of π. Of the given choices, only 25π is an odd integer multiple of π.",
      "hasImage": false
    },
    {
      "id": 49,
      "question": "(x + 4)² + (y - 19)² = 121. The graph of the given equation is a circle in the xy-plane. The point (a, b) lies on the circle. Which of the following is a possible value for a?",
      "answers": ["A. -16", "B. -14", "C. 11", "D. 19"],
      "correctAnswer": "B",
      "rationale": "Choice B is correct. An equation of the form (x - h)² + (y - k)² = r², where h, k, and r are constants, represents a circle in the xy-plane with center (h, k) and radius r. Therefore, the circle represented by the given equation has center (-4, 19) and radius 11. Since the center of the circle has an x-coordinate of -4 and the radius of the circle is 11, the least possible x-coordinate for any point on the circle is -4 - 11 = -15. Similarly, the greatest possible x-coordinate for any point on the circle is -4 + 11 = 7. Therefore, if the point (a, b) lies on the circle, it must be true that -15 ≤ a ≤ 7. Of the given choices, only -14 satisfies this inequality.",
      "hasImage": false
    },
    {
      "id": 50,
      "question": "Right rectangular prism X is similar to right rectangular prism Y. The surface area of right rectangular prism X is 58 square centimeters, and the surface area of right rectangular prism Y is 1,450 cm². The volume of right rectangular prism Y is 1,250 cubic centimeters. What is the sum of the volumes, in cm³, of right rectangular prism X and right rectangular prism Y?",
      "answers": ["A. 1,260", "B. 1,300", "C. 2,500", "D. 2,508"],
      "correctAnswer": "A",
      "rationale": "The correct answer is 1,260. Since it's given that prisms X and Y are similar, all the linear measurements of prism Y are k times the respective linear measurements of prism X, where k is a positive constant. Therefore, the surface area of prism Y is k² times the surface area of prism X and the volume of prism Y is k³ times the volume of prism X. It's given that the surface area of prism Y is 1,450 cm², and the surface area of prism X is 58 cm², which implies that 1,450 = 58k². Dividing both sides of this equation by 58 yields 1,450/58 = k², or k² = 25. Since k is a positive constant, k = 5. It's given that the volume of prism Y is 1,250 cm³. Therefore, the volume of prism X is equal to 1,250/k³ cm³ = 1,250/5³ cm³ = 1,250/125 = 10 cm³. Thus, the sum of the volumes, in cm³, of the two prisms is 1,250 + 10 = 1,260.",
      "hasImage": false
    }
  ]
};
