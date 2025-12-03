const DATA_ANALYSIS_DATA = {
  "questions": [
    {
      "id": 1,
      "question": "In a study of cell phone use, 799 randomly selected US teens were asked how often they talked on a cell phone and about their texting behavior. The data are summarized in the table above. Based on the data from the study, an estimate of the percent of US teens who are heavy texters is 30% and the associated margin of error is 3%. Which of the following is a correct statement based on the given margin of error?",
      "answers": [
        "A. Approximately 3% of the teens in the study who are classified as heavy texters are not really heavy texters.",
        "B. It is not possible that the percent of all US teens who are heavy texters is less than 27%.",
        "C. The percent of all US teens who are heavy texters is 33%.",
        "D. It is doubtful that the percent of all US teens who are heavy texters is 35%."
      ],
      "correctAnswer": "D",
      "rationale": "The margin of error of 3% indicates that the actual percent of all US teens who are heavy texters is likely within 3% of the estimate of 30%, or between 27% and 33%. Therefore, it is unlikely, or doubtful, that the percent of all US teens who are heavy texters would be 35%.",
      "hasImage": true
    },
    {
      "id": 2,
      "question": "Jennifer bought a box of Crunchy Grain cereal. The nutrition facts on the box state that a serving size of the cereal is 3/4 cup and provides 210 calories, 50 of which are calories from fat. In addition, each serving of the cereal provides 180 milligrams of potassium, which is 5% of the daily allowance for adults. If p percent of an adult's daily allowance of potassium is provided by x servings of Crunchy Grain cereal per day, which of the following expresses p in terms of x?",
      "answers": [
        "A. p = 0.5x",
        "B. p = 5x",
        "C. p = (0.05)^x",
        "D. p = (1.05)^x"
      ],
      "correctAnswer": "B",
      "rationale": "Each serving provides 5% of an adult's daily allowance of potassium, so x servings would provide x times 5%. The percentage p is 5 times the number of servings x, so p = 5x.",
      "hasImage": false
    },
    {
      "id": 3,
      "question": "The expression 0.35x represents the result of decreasing a positive quantity x by what percent?",
      "answers": [
        "A. 3.5%",
        "B. 35%",
        "C. 6.5%",
        "D. 65%"
      ],
      "correctAnswer": "D",
      "rationale": "Let n% represent the percent decrease. Then x - (n/100)x = 0.35x, which simplifies to 1 - n/100 = 0.35. Solving gives n/100 = 0.65, so n = 65%.",
      "hasImage": false
    },
    {
      "id": 4,
      "question": "4, 10, 18, 4, 4, 5, 6, 5. What is the median of the data set shown?",
      "answers": [
        "A. 4",
        "B. 5",
        "C. 7",
        "D. 14"
      ],
      "correctAnswer": "B",
      "rationale": "When listed in ascending order: 4, 4, 4, 5, 5, 6, 10, 18. With 8 values, the median is the average of the two middle values (5 and 5), which is 5.",
      "hasImage": false
    },
    {
      "id": 5,
      "question": "The table above shows information about 14 cars listed for sale on an auto dealership's website. If one of the cars listed for sale is selected at random, what is the probability that the car selected will be a hybrid car priced at no more than $25,000?",
      "answers": [
        "A. 1/7",
        "B. 1/7",
        "C. 1/3",
        "D. 1/7"
      ],
      "correctAnswer": "A",
      "rationale": "There are 2 hybrid cars priced at no more than $25,000 out of 14 total cars. The probability is 2/14 = 1/7.",
      "hasImage": true
    },
    {
      "id": 6,
      "question": "The International Space Station orbits Earth at an average speed of 4.76 miles per second. What is the space station's average speed in miles per hour?",
      "answers": [
        "A. 285.6",
        "B. 571.2",
        "C. 856.8",
        "D. 17,136.0"
      ],
      "correctAnswer": "D",
      "rationale": "Convert seconds to hours: 4.76 miles/second × 3600 seconds/hour = 17,136 miles/hour.",
      "hasImage": false
    },
    {
      "id": 7,
      "question": "The scatterplot shows the relationship between two variables, x and y. A line of best fit for the data is also shown. Which of the following is closest to the difference between the y-coordinate of the data point with x = 1 and the y-value predicted by the line of best fit at x = 1?",
      "answers": [
        "A. 1",
        "B. 2",
        "C. 5",
        "D. 12"
      ],
      "correctAnswer": "A",
      "rationale": "The data point at x = 1 has y-coordinate of 12. The line of best fit predicts approximately 11 at x = 1. The difference is 12 - 11 = 1.",
      "hasImage": true
    },
    {
      "id": 8,
      "question": "The population density of Iceland, in people per square kilometer of land area, increased from 2.5 in 1990 to 3.3 in 2014. During this time period, the land area of Iceland was 100,250 square kilometers. By how many people did Iceland's population increase from 1990 to 2014?",
      "answers": [
        "A. 330,825",
        "B. 132,330",
        "C. 125,312",
        "D. 80,200"
      ],
      "correctAnswer": "D",
      "rationale": "Increase in population density = 3.3 - 2.5 = 0.8 people/km². Population increase = 0.8 × 100,250 = 80,200 people.",
      "hasImage": false
    },
    {
      "id": 9,
      "question": "The box plots summarize the masses, in kilograms, of two groups of gazelles. Based on the box plots, which of the following statements must be true?",
      "answers": [
        "A. The mean mass of group 1 is greater than the mean mass of group 2.",
        "B. The mean mass of group 1 is less than the mean mass of group 2.",
        "C. The median mass of group 1 is greater than the median mass of group 2.",
        "D. The median mass of group 1 is less than the median mass of group 2."
      ],
      "correctAnswer": "C",
      "rationale": "The median of group 1 is approximately 25 kg, and the median of group 2 is approximately 24 kg. Therefore, the median mass of group 1 is greater than the median mass of group 2.",
      "hasImage": true
    },
    {
      "id": 10,
      "question": "Free Response: A school district is forming a committee to discuss plans for the construction of a new high school. Of those invited to join the committee, 15% are parents of students, 45% are teachers from the current high school, 25% are school and district administrators, and the remaining 6 individuals are students. How many more teachers were invited to join the committee than school and district administrators?",
      "answers": [
        "A. 4",
        "B. 6",
        "C. 8",
        "D. 10"
      ],
      "correctAnswer": "C",
      "rationale": "Students represent 100% - 15% - 45% - 25% = 15% of the committee. Since 6 students represent 15%, the total number is 6/0.15 = 40. Teachers: 0.45 × 40 = 18. Administrators: 0.25 × 40 = 10. Difference: 18 - 10 = 8.",
      "hasImage": false
    },
    {
      "id": 11,
      "question": "Free Response: The ratio 140 to m is equivalent to the ratio 4 to 28. What is the value of m?",
      "answers": [
        "A. 140",
        "B. 560",
        "C. 980",
        "D. 3920"
      ],
      "correctAnswer": "C",
      "rationale": "Set up proportion: 140/m = 4/28. Cross-multiply: 4m = 140 × 28 = 3920. So m = 3920/4 = 980.",
      "hasImage": false
    },
    {
      "id": 12,
      "question": "A sample of 40 fourth-grade students was selected at random from a certain school. The 40 students completed a survey about the morning announcements, and 32 thought the announcements were helpful. Which of the following is the largest population to which the results of the survey can be applied?",
      "answers": [
        "A. The 40 students who were surveyed",
        "B. All fourth-grade students at the school",
        "C. All students at the school",
        "D. All fourth-grade students in the county in which the school is located"
      ],
      "correctAnswer": "B",
      "rationale": "Since the sample was randomly selected from all fourth-grade students at the school, the results can be generalized to all fourth-grade students at that school.",
      "hasImage": false
    },
    {
      "id": 13,
      "question": "Residents of a town were surveyed to determine whether they are satisfied with the concession stand at the local park. A random sample of 200 residents was selected. All 200 responded, and 87% said they are satisfied. Based on this information, which of the following statements must be true? I. Of all the town residents, 87% would say they are satisfied with the concession stand at the local park. II. If another random sample of 200 residents were surveyed, 87% would say they are satisfied.",
      "answers": [
        "A. Neither",
        "B. I only",
        "C. II only",
        "D. I and II"
      ],
      "correctAnswer": "A",
      "rationale": "A sample provides an estimate, not a definitive statement about the entire population. Different samples could yield different results.",
      "hasImage": false
    },
    {
      "id": 14,
      "question": "Free Response: How many fluid ounces are equivalent to 76 quarts? (8 fluid ounces = 1 cup and 4 cups = 1 quart)",
      "answers": [
        "A. 608",
        "B. 1216",
        "C. 1824",
        "D. 2432"
      ],
      "correctAnswer": "D",
      "rationale": "76 quarts × 4 cups/quart × 8 fl oz/cup = 76 × 4 × 8 = 2432 fluid ounces.",
      "hasImage": false
    },
    {
      "id": 15,
      "question": "The table above shows the distribution of ages of the 20 students enrolled in a college class. Which of the following gives the correct order of the mean, median, and mode of the ages?",
      "answers": [
        "A. mode < median < mean",
        "B. mode < mean < median",
        "C. median < mode < mean",
        "D. mean < mode < median"
      ],
      "correctAnswer": "A",
      "rationale": "Mode = 18 (most frequent), median = 19 (average of 10th and 11th values), mean ≈ 20 (calculated from data). So mode < median < mean.",
      "hasImage": true
    },
    {
      "id": 16,
      "question": "The frequency table summarizes the 57 data values in a data set. What is the maximum data value in the data set?",
      "answers": [
        "A. 11",
        "B. 12",
        "C. 13",
        "D. 14"
      ],
      "correctAnswer": "D",
      "rationale": "The highest data value with non-zero frequency is 14, which occurs 6 times.",
      "hasImage": true
    },
    {
      "id": 17,
      "question": "The data on the coat color and eye color for 48 Himalayan kittens available for adoption were collected and summarized in the table above. What fraction of the chocolate-colored kittens has deep blue eyes?",
      "answers": [
        "A. 12/48",
        "B. 12/16",
        "C. 12/28",
        "D. 12/32"
      ],
      "correctAnswer": "B",
      "rationale": "There are 16 chocolate-colored kittens total, and 12 of them have deep blue eyes. The fraction is 12/16.",
      "hasImage": true
    },
    {
      "id": 18,
      "question": "Free Response: If x/y = 4 and 24x/(ny) = 4, what is the value of n?",
      "answers": [
        "A. 4",
        "B. 6",
        "C. 12",
        "D. 24"
      ],
      "correctAnswer": "D",
      "rationale": "Since x/y = 4, substitute into second equation: (24/n) × 4 = 4. So 96/n = 4, thus n = 96/4 = 24.",
      "hasImage": false
    },
    {
      "id": 19,
      "question": "Free Response: In a sample, 80% of the items are faulty. There are 88 faulty items in the sample. How many total items are in the sample?",
      "answers": [
        "A. 100",
        "B. 105",
        "C. 110",
        "D. 120"
      ],
      "correctAnswer": "C",
      "rationale": "If 80% of total = 88, then total = 88/0.80 = 110.",
      "hasImage": false
    },
    {
      "id": 20,
      "question": "The positive number a is 2,241% of the sum of the positive numbers b and c, and b is 83% of c. What percent of b is a?",
      "answers": [
        "A. 23.24%",
        "B. 49.41%",
        "C. 2,324%",
        "D. 4,941%"
      ],
      "correctAnswer": "D",
      "rationale": "a = 22.41(b + c) and b = 0.83c, so c = b/0.83. Then a = 22.41(b + b/0.83) = 22.41b(1 + 1/0.83) ≈ 49.41b, so a is 4,941% of b.",
      "hasImage": false
    },
    {
      "id": 21,
      "question": "The scatterplot shows the relationship between two variables, x and y. An equation for the exponential model shown can be written as y = a(b)^x, where a and b are positive constants. Which of the following is closest to the value of b?",
      "answers": [
        "A. 0.83",
        "B. 1.83",
        "C. 18.36",
        "D. 126.35"
      ],
      "correctAnswer": "A",
      "rationale": "The exponential model is decreasing (y decreases as x increases), so b must be between 0 and 1. 0.83 is the only choice in that range.",
      "hasImage": true
    },
    {
      "id": 22,
      "question": "The manager of an online news service received the report above on the number of subscriptions sold by the service. The manager estimated that the percent increase from 2012 to 2013 would be double the percent increase from 2013 to 2014. How many subscriptions did the manager expect would be sold in 2014?",
      "answers": [
        "A. 6,020",
        "B. 6,027",
        "C. 6,440",
        "D. 6,468"
      ],
      "correctAnswer": "B",
      "rationale": "Percent increase 2012-2013: (5,880 - 5,600)/5,600 = 0.05 or 5%. Expected increase 2013-2014: 2.5%. Expected 2014 subscriptions: 5,880 × 1.025 = 6,027.",
      "hasImage": true
    },
    {
      "id": 23,
      "question": "Free Response: Pure beeswax has a density of 0.555 ounce per cubic inch. An online company sells pure beeswax at a price of $8.00 per ounce. What is the selling price, in dollars per cubic inch, for pure beeswax purchased from this company?",
      "answers": [
        "A. $2.22",
        "B. $4.44",
        "C. $6.66",
        "D. $8.88"
      ],
      "correctAnswer": "B",
      "rationale": "Price per cubic inch = density × price per ounce = 0.555 oz/in³ × $8.00/oz = $4.44/in³.",
      "hasImage": false
    },
    {
      "id": 24,
      "question": "The line graph shows the total amount of snow, in inches, recorded each year in Washington, DC, from 2003 to 2015. If p% is the percent decrease in the annual snowfall from 2003 to 2007, what is the value of p?",
      "answers": [
        "A. 25",
        "B. 50",
        "C. 75",
        "D. 100"
      ],
      "correctAnswer": "C",
      "rationale": "2003: 40 inches, 2007: 10 inches. Percent decrease = (40-10)/40 × 100% = 30/40 × 100% = 75%.",
      "hasImage": true
    },
    {
      "id": 25,
      "question": "A study was done on the weights of different types of fish in a pond. A random sample of fish were caught and marked in order to ensure that none were weighed more than once. The sample contained 150 largemouth bass, of which 30% weighed more than 2 pounds. Which of the following conclusions is best supported by the sample data?",
      "answers": [
        "A. The majority of all fish in the pond weigh less than 2 pounds.",
        "B. The average weight of all fish in the pond is approximately 2 pounds.",
        "C. Approximately 30% of all fish in the pond weigh more than 2 pounds.",
        "D. Approximately 30% of all largemouth bass in the pond weigh more than 2 pounds."
      ],
      "correctAnswer": "D",
      "rationale": "The sample was specifically of largemouth bass, so the conclusion can only be generalized to largemouth bass, not all fish.",
      "hasImage": false
    },
    {
      "id": 26,
      "question": "Human blood can be classified into four common blood types—A, B, AB, and O. It is also characterized by the presence (+) or absence (-) of the rhesus factor. The table above shows the distribution of blood type and rhesus factor for a group of people. If one of these people who is rhesus negative (-) is chosen at random, the probability that the person has blood type B is 1/9. What is the value of x?",
      "answers": [
        "A. 4",
        "B. 6",
        "C. 8",
        "D. 10"
      ],
      "correctAnswer": "C",
      "rationale": "Total rhesus negative: 7+2+1+x = 10+x. Probability blood type B given rhesus negative: 2/(10+x) = 1/9. So 18 = 10+x, thus x = 8.",
      "hasImage": true
    },
    {
      "id": 27,
      "question": "In a bag, there are 7 red, 4 white, 33 blue, and 33 yellow cubes. If one of these cubes is selected at random, what is the probability of selecting a cube that is neither blue nor yellow?",
      "answers": [
        "A. 6/7",
        "B. 7/11",
        "C. 1/3",
        "D. 1/7"
      ],
      "correctAnswer": "D",
      "rationale": "Total cubes: 7+4+33+33 = 77. Cubes neither blue nor yellow: red + white = 7+4 = 11. Probability = 11/77 = 1/7.",
      "hasImage": false
    },
    {
      "id": 28,
      "question": "The table below shows the number of state parks in a certain state that contain camping facilities and bicycle paths. If one of these state parks is selected at random, what is the probability that it has camping facilities but does not have bicycle paths?",
      "answers": [
        "A. 5/37",
        "B. 5/25",
        "C. 8/28",
        "D. 5/9"
      ],
      "correctAnswer": "A",
      "rationale": "Total parks: 20+5+8+4 = 37. Parks with camping but no bicycle paths: 5. Probability = 5/37.",
      "hasImage": true
    },
    {
      "id": 29,
      "question": "The graph shows the momentum y, in newton-seconds, of an object x seconds after the object started moving, for 0 ≤ x ≤ 8. What is the average rate of change, in newton-seconds per second, in the momentum of the object from x = 2 to x = 6?",
      "answers": [
        "A. 0.25",
        "B. 0.5",
        "C. 1.0",
        "D. 2.0"
      ],
      "correctAnswer": "B",
      "rationale": "At x=2, y=6; at x=6, y=8. Average rate of change = (8-6)/(6-2) = 2/4 = 0.5.",
      "hasImage": true
    },
    {
      "id": 30,
      "question": "The results of two independent surveys are shown in the table below. Which statement is true based on the table?",
      "answers": [
        "A. The Group A data set was identical to the Group B data set.",
        "B. Group B contained the tallest participant.",
        "C. The heights of the men in Group B had a larger spread than the heights of the men in Group A.",
        "D. The median height of Group B is larger than the median height of Group A."
      ],
      "correctAnswer": "C",
      "rationale": "Group B has a larger standard deviation (19.1 vs 12.5), indicating greater spread in the data.",
      "hasImage": true
    },
    {
      "id": 31,
      "question": "The positive number a is 230% of the number b, and a is 60% of the number c. If c is p% of b, which of the following is closest to the value of p?",
      "answers": [
        "A. 138",
        "B. 217",
        "C. 283",
        "D. 383"
      ],
      "correctAnswer": "D",
      "rationale": "a = 2.3b and a = 0.6c. So 2.3b = 0.6c, thus c = (2.3/0.6)b ≈ 3.833b. So c is approximately 383% of b.",
      "hasImage": false
    },
    {
      "id": 32,
      "question": "15, 14, 18, 17, x. The mean and the median of the five numbers above are equal. Which of the following is NOT a possible value of x?",
      "answers": [
        "A. 6",
        "B. 11",
        "C. 16",
        "D. 21"
      ],
      "correctAnswer": "A",
      "rationale": "If x=6: Mean = (15+14+18+17+6)/5 = 70/5 = 14. Sorted: 6,14,15,17,18, median = 15. Mean ≠ median. Other values make mean equal to median.",
      "hasImage": false
    },
    {
      "id": 33,
      "question": "Free Response: Data set A consists of 10 positive integers less than 60. The list shown gives 9 of the integers from data set A: 43, 45, 44, 43, 38, 39, 40, 46, 40. The mean of these 9 integers is 42. If the mean of data set A is an integer that is greater than 42, what is the value of the largest integer from data set A?",
      "answers": [
        "A. 50",
        "B. 52",
        "C. 54",
        "D. 56"
      ],
      "correctAnswer": "B",
      "rationale": "Sum of 9 numbers = 378. Let 10th number = x. Mean of all 10 = (378+x)/10 > 42 and integer, so 378+x > 420, x > 42. Also (378+x) divisible by 10, so x ends in 2. Only 52 fits (42 < x < 60).",
      "hasImage": false
    },
    {
      "id": 34,
      "question": "In the given scatterplot, a line of best fit for the data is shown. Which of the following is closest to the slope of this line of best fit?",
      "answers": [
        "A. 7",
        "B. 0.7",
        "C. -0.7",
        "D. -7"
      ],
      "correctAnswer": "C",
      "rationale": "Line decreases as x increases, so negative slope. Using approximate points (0,8) and (10,1): slope = (1-8)/(10-0) = -7/10 = -0.7.",
      "hasImage": true
    },
    {
      "id": 35,
      "question": "A park ranger asked a random sample of visitors how far they hiked during their visit. Based on the responses, the estimated mean was found to be 4.5 miles, with an associated margin of error of 0.5 miles. Which of the following is the best conclusion from these data?",
      "answers": [
        "A. It is likely that all visitors hiked between 4 and 5 miles.",
        "B. It is likely that most visitors hiked exactly 4.5 miles.",
        "C. It is not possible that any visitor hiked less than 3 miles.",
        "D. It is plausible that the mean distance hiked for all visitors is between 4 and 5 miles."
      ],
      "correctAnswer": "D",
      "rationale": "Margin of error creates an interval: 4.5 ± 0.5 = [4, 5]. So it's plausible the true population mean is between 4 and 5 miles.",
      "hasImage": false
    },
    {
      "id": 36,
      "question": "The scatterplot shows the relationship between two variables for data set E. A line of best fit is shown. Data set F is created by multiplying the y-coordinate of each data point from data set E by 3.9. Which of the following could be an equation of a line of best fit for data set F?",
      "answers": [
        "A. y = 46.8 + 5.9x",
        "B. y = 12 + 1.5x",
        "C. y = 12 + 5.9x",
        "D. y = 46.8 + 1.5x"
      ],
      "correctAnswer": "A",
      "rationale": "Multiplying all y-values by 3.9 multiplies both the y-intercept and slope by 3.9. Original line appears to be approximately y = 12 + 1.5x. After multiplication: y = (12×3.9) + (1.5×3.9)x = 46.8 + 5.85x ≈ 46.8 + 5.9x.",
      "hasImage": true
    },
    {
      "id": 37,
      "question": "Data set A and data set B each consist of 27 values. The table shows the frequencies of the values for each data set. Which of the following statements best compares the means of the two data sets?",
      "answers": [
        "A. The mean of data set A is greater than the mean of data set B.",
        "B. The mean of data set A is less than the mean of data set B.",
        "C. The mean of data set A is equal to the mean of data set B.",
        "D. There is not enough information to compare the means of the data sets."
      ],
      "correctAnswer": "A",
      "rationale": "Calculate weighted means: Set A has more weight on higher values (42,46), Set B has more weight on lower values (30,34). So mean of A > mean of B.",
      "hasImage": true
    },
    {
      "id": 38,
      "question": "Free Response: The ratio x to y is equivalent to the ratio 9 to 5. If the value of x is 162, what is the value of y?",
      "answers": [
        "A. 72",
        "B. 81",
        "C. 90",
        "D. 99"
      ],
      "correctAnswer": "C",
      "rationale": "x/y = 9/5, so 162/y = 9/5. Cross-multiply: 9y = 810, so y = 90.",
      "hasImage": false
    },
    {
      "id": 39,
      "question": "Free Response: An insurance company offers a series of three information sessions. 1,250 people attended the first information session. 72% of the people who attended the first information session attended the second information session, and 36% of the people who attended the first and second information sessions attended the third information session. How many people attended all three information sessions?",
      "answers": [
        "A. 270",
        "B. 324",
        "C. 450",
        "D. 500"
      ],
      "correctAnswer": "B",
      "rationale": "Attended first and second: 0.72 × 1250 = 900. Attended all three: 0.36 × 900 = 324.",
      "hasImage": false
    },
    {
      "id": 40,
      "question": "Which of the following is true about the values of 2^x and 2x + 2 for x > 0?",
      "answers": [
        "A. For all x > 0, it is true that 2^x < 2x + 2.",
        "B. For all x > 0, it is true that 2^x > 2x + 2.",
        "C. There is a constant c such that if 0 < x < c, then 2^x < 2x + 2, but if x > c, then 2^x > 2x + 2.",
        "D. There is a constant c such that if 0 < x < c, then 2^x > 2x + 2, but if x > c, then 2^x < 2x + 2."
      ],
      "correctAnswer": "C",
      "rationale": "For x=1: 2^1=2, 2(1)+2=4 (2^x < 2x+2). For x=4: 2^4=16, 2(4)+2=10 (2^x > 2x+2). There's a crossover point around x=3.",
      "hasImage": false
    },
    {
      "id": 41,
      "question": "A data set of 27 different numbers has a mean of 33 and a median of 33. A new data set is created by adding 7 to each number in the original data set that is greater than the median and subtracting 7 from each number in the original data set that is less than the median. Which of the following measures does NOT have the same value in both the original and new data sets?",
      "answers": [
        "A. Median",
        "B. Mean",
        "C. Sum of the numbers",
        "D. Standard deviation"
      ],
      "correctAnswer": "D",
      "rationale": "Adding to values above median and subtracting from values below median increases the spread while keeping the median, mean, and sum unchanged. Standard deviation increases with greater spread.",
      "hasImage": false
    },
    {
      "id": 42,
      "question": "During a study, the temperature of the air in a chamber was recorded. The scatterplot shows the recorded temperature of the air in the chamber x minutes after the start of the study. What was the average rate of change, in °C per minute, of the recorded temperature of the air in the chamber from x = 5 to x = 15?",
      "answers": [
        "A. 0.2",
        "B. 0.5",
        "C. 5.0",
        "D. 10.0"
      ],
      "correctAnswer": "B",
      "rationale": "At x=5, y≈20; at x=15, y≈25. Rate of change = (25-20)/(15-5) = 5/10 = 0.5 °C per minute.",
      "hasImage": true
    },
    {
      "id": 43,
      "question": "A grove has 6 rows of birch trees and 5 rows of maple trees. Each row of birch trees has 8 trees 20 feet or taller and 6 trees shorter than 20 feet. Each row of maple trees has 9 trees 20 feet or taller and 7 trees shorter than 20 feet. A tree from one of these rows will be selected at random. What is the probability of selecting a maple tree, given that the tree is 20 feet or taller?",
      "answers": [
        "A. 9/164",
        "B. 3/10",
        "C. 15/31",
        "D. 9/17"
      ],
      "correctAnswer": "C",
      "rationale": "Birch trees ≥20 ft: 6×8=48. Maple trees ≥20 ft: 5×9=45. Total ≥20 ft: 48+45=93. P(maple | ≥20 ft) = 45/93 = 15/31.",
      "hasImage": false
    },
    {
      "id": 44,
      "question": "During the first month of sales, a company sold 1,300,000 units of a certain type of smartphone. During the same month, 15% of the units sold were returned. If sales and the return rate remain the same for each of the next 5 months, about how many units of this smartphone will be returned to the company during this 6-month period?",
      "answers": [
        "A. 195,000",
        "B. 975,000",
        "C. 1,170,000",
        "D. 6,630,000"
      ],
      "correctAnswer": "C",
      "rationale": "Returns per month: 1,300,000 × 0.15 = 195,000. Over 6 months: 195,000 × 6 = 1,170,000.",
      "hasImage": false
    },
    {
      "id": 45,
      "question": "The scatterplot shows the relationship between two variables, x and y. A line of best fit is also shown. Which of the following is closest to the slope of the line of best fit shown?",
      "answers": [
        "A. -2.4",
        "B. -0.8",
        "C. 0.8",
        "D. 2.4"
      ],
      "correctAnswer": "B",
      "rationale": "Line decreases as x increases, so negative slope. Using approximate points (1,12) and (11,4): slope = (4-12)/(11-1) = -8/10 = -0.8.",
      "hasImage": true
    },
    {
      "id": 46,
      "question": "A survey was conducted using a sample of history professors selected at random from the California State Universities. The professors surveyed were asked to name the publishers of their current texts. What is the largest population to which the results of the survey can be generalized?",
      "answers": [
        "A. All professors in the United States",
        "B. All history professors in the United States",
        "C. All history professors at all California State Universities",
        "D. All professors at all California State Universities"
      ],
      "correctAnswer": "C",
      "rationale": "The sample was randomly selected from history professors at California State Universities, so results can be generalized to that population.",
      "hasImage": false
    },
    {
      "id": 47,
      "question": "The scatterplot above shows the federal-mandated minimum wage every 10 years between 1940 and 2010. A line of best fit is shown, and its equation is y = 0.096x - 0.488. What does the line of best fit predict about the increase in the minimum wage over the 70-year period?",
      "answers": [
        "A. Each year between 1940 and 2010, the average increase in minimum wage was 0.096 dollars.",
        "B. Each year between 1940 and 2010, the average increase in minimum wage was 0.49 dollars.",
        "C. Every 10 years between 1940 and 2010, the average increase in minimum wage was 0.096 dollars.",
        "D. Every 10 years between 1940 and 2010, the average increase in minimum wage was 0.488 dollars."
      ],
      "correctAnswer": "A",
      "rationale": "The slope is 0.096, which represents the predicted increase per year (since x is years since 1940).",
      "hasImage": true
    },
    {
      "id": 48,
      "question": "A sample of oak has a density of 807 kilograms per cubic meter. The sample is in the shape of a cube, where each edge has a length of 0.90 meters. To the nearest whole number, what is the mass, in kilograms, of this sample?",
      "answers": [
        "A. 588",
        "B. 726",
        "C. 897",
        "D. 1,107"
      ],
      "correctAnswer": "A",
      "rationale": "Volume = (0.90)^3 = 0.729 m³. Mass = density × volume = 807 × 0.729 ≈ 588 kg.",
      "hasImage": false
    },
    {
      "id": 49,
      "question": "At a particular track meet, the ratio of coaches to athletes is 1 to 26. If there are x coaches at the track meet, which of the following expressions represents the number of athletes at the track meet?",
      "answers": [
        "A. x/26",
        "B. 26x",
        "C. x + 26",
        "D. 26/x"
      ],
      "correctAnswer": "B",
      "rationale": "Ratio coaches:athletes = 1:26. With x coaches, multiply both by x: x:26x. So athletes = 26x.",
      "hasImage": false
    },
    {
      "id": 50,
      "question": "Free Response: On April 18, 1775, Paul Revere set off on his midnight ride from Charlestown to Lexington. If he had ridden straight to Lexington without stopping, he would have traveled 11 miles in 26 minutes. In such a ride, what would the average speed of his horse have been, to the nearest tenth of a mile per hour?",
      "answers": [
        "A. 22.5",
        "B. 24.0",
        "C. 25.4",
        "D. 26.8"
      ],
      "correctAnswer": "C",
      "rationale": "Speed = distance/time = 11 miles / (26/60) hours = 11 × (60/26) = 660/26 ≈ 25.38 ≈ 25.4 mph.",
      "hasImage": false
    }
  ]
};
