export const EXPERIENCE = [
  {
    company_name: "Digital Gravity",
    role: "FullStack Developer",
    type: "Full-time",
    duration: "Mar 2025 – Mar 2026",
    location: "Karachi, Pakistan",
    current: true,
    bullets: [
      "Built and maintained full-stack features across React, Next.js, and Node.js.",
      "Developed microservices on AWS and integrated third-party APIs.",
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Java",
      "AWS",
      "PostgreSQL",
      "OpenAI",
    ],
  },
  {
    company_name: "Dynasoft Cloud",
    role: "Junior Software Engineer",
    type: "Full-time",
    duration: "Nov 2023 – Dec 2024",
    location: "Karachi, Pakistan",
    current: false,
    bullets: [
      "Developed and maintained Java Spring Boot microservices.",
      "Collaborated on REST API design and database schema planning.",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL"],
  },
];
export const BLOG_POSTS = [
  {
    slug: "n-plus-one-queries",
    name: "N+1 Queries are a nightmare!",
    description: "Understanding and Avoiding N + 1 Queries.",
    date_posted: "Mar 12, 2026",
    content: `
Yes, that's right.

Because it causes a massive spike in network round-trips and drastically slows down your application. Each database query requires a separate round-trip.

An N+1 query happens when your application fetches a collection of records and then issues an additional query for each record to load related data. What starts as a single database query can quickly turn into hundreds or thousands of queries as the dataset grows.

Let's say we want to fetch all appointments along with their patients.

\`\`\`ts
const appointments = await appointmentRepository.find();

for (const appointment of appointments) {
  appointment.patient = await patientRepository.findOne({
    where: { id: appointment.patientId },
  });
}
\`\`\`

At first glance, nothing looks wrong. We fetch all appointments and then load the patient for each appointment.

The problem becomes obvious when we look at the queries being executed.

\`\`\`sql
SELECT * FROM appointments;

SELECT * FROM patients WHERE id = 1;
SELECT * FROM patients WHERE id = 2;
SELECT * FROM patients WHERE id = 3;
...
\`\`\`

If there are 500 appointments, we've just executed:

\`\`\`
1 query for appointments
500 queries for patients

Total: 501 queries
\`\`\`

The endpoint still works, but the database is doing 500 times more work than necessary.

A better approach is to fetch everything in a single query.

\`\`\`ts
const appointments = await appointmentRepository
  .createQueryBuilder("appointment")
  .leftJoinAndSelect("appointment.patient", "patient")
  .getMany();
\`\`\`

Which translates roughly to:

\`\`\`sql
SELECT
  a.*,
  p.*
FROM appointments a
LEFT JOIN patients p
ON p.id = a.patient_id;
\`\`\`

Now we're executing a single query regardless of whether there are 10 appointments or 10,000.

That's the difference between code that works and code that scales.

**How to Fix N+1 Queries**

Using a JOIN is usually the simplest solution, but it's not the only one.

**1. Fetch Related Data with Joins**

This is the approach we used above.

\`\`\`ts
const appointments = await appointmentRepository
  .createQueryBuilder("appointment")
  .leftJoinAndSelect("appointment.patient", "patient")
  .getMany();
\`\`\`

Instead of asking the database for each patient individually, we ask for everything in a single query.

**2. Batch Related Records**

Sometimes joining multiple tables isn't ideal, especially when the relationships become complex. In those cases, batching can be a good alternative.

\`\`\`sql
SELECT * FROM appointments;

SELECT * FROM patients
WHERE id IN (1, 2, 3, 4, 5);
\`\`\`

Now we're making:

\`\`\`
1 query for appointments
1 query for patients
\`\`\`

instead of:

\`\`\`
1 query for appointments
500 queries for patients
\`\`\`

The database still receives only a small number of requests regardless of how many appointments are returned.

**3. Use ORM Relation Loading**

Most modern ORMs already provide ways to load related data efficiently.

\`\`\`ts
const appointments = await appointmentRepository.find({
  relations: {
    patient: true,
  },
});
\`\`\`

This allows the ORM to fetch the required relations up front instead of triggering additional queries while iterating through records.

**Final Thoughts**

N+1 queries are dangerous because they don't look like a problem when reading the code.

The API works.

The response is correct.

The tests pass.

But every additional record increases the number of database queries being executed.

The easiest way to catch them is to keep an eye on your query logs. If you notice the same query being executed repeatedly for each record in a collection, chances are you've run into an N+1 problem.

A query that runs once is usually harmless.

The same query running 500 times rarely is.
`,
  },
  {
    slug: "multi-tenant-vs-single-tenant",
    name: "Multi-Tenant vs Single-Tenant — What's the Difference?",
    description:
      "Shared database or isolated stack? A guide to picking the right tenancy model before you over-engineer your saas.",
    date_posted: "Feb 3, 2026",
  },
  {
    slug: "css-that-scales",
    name: "CSS that scales with the team",
    description:
      "Tokens, composition, and when to stop adding new utility classes.",
    date_posted: "Jan 18, 2026",
  },
];

export const PERSONAL = [
  {
    slug: "/books",
    name: "Books",
    description: "A collection of books that have influenced my perspective.",
  },
  {
    slug: "/quotes",
    name: "Quotes",
    description:
      "A catalog of all the quotes I found interesting over the internet",
  },
  {
    slug: "/thoughts",
    name: "Thoughts",
    description: "My random thoughts",
  },
];

export const THOUGHTS = [
  {
    date: "Apr 8, 2026",
    text: "After all, what is the true purpose of our existence in this world?",
    time: "3:00 AM",
  },
  {
    date: "Mar 15, 2026",
    text: "In the pursuit of success, how often do we pause to ask whether we are chasing the right things?",
    time: "2:17 AM",
  },
];

export const QOUTES = [
  {
    author: "Bobby Fischer",
    text: "I like the moment I crush a man's ego.",
  },
  {
    author: "Friedrich Nietzsche",
    text: "And those who were seen dancing were thought to be insane by those who could not hear the music.",
  },
  {
    author: "Anonymous",
    text: "It's okay to look back at the past, just don't stare.",
  },
];

export const BOOKS = [
  {
    author: "Josh Kaufman",
    book_name: "The Personal MBA",
  },
  {
    author: "Jordan B Peterson",
    book_name: "12 Rules For Life",
  },
  {
    author: "Chris Guillebeau",
    book_name: "100$ Startup",
  },
  {
    author: "Eric Ries",
    book_name: "The Lean Startup",
  },
  {
    author: "George S Clason",
    book_name: "The Richest Man In Babylon",
  },
  {
    author: "Robert T Kiyosaki",
    book_name: "Rich Dad Poor Dad",
  },
  {
    author: "Yuval Noah Harari",
    book_name: "Sapien - A Brief History of Humankind",
  },
  {
    author: "Alex Xu",
    book_name: "System Design Interview",
  },
  {
    author: "Robert Greene",
    book_name: "The 48 Laws of Power",
  },
];
