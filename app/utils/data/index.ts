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
    name: "Multi-Tenant Architecture: One App, Thousands of Customers",
    description:
      "Understanding how SaaS applications isolate customer data and when to choose multi-tenancy over single-tenancy.",
    date_posted: "Feb 3, 2026",
    content: `
  
  Most SaaS applications serve thousands of customers.
  
  Yet they don't run thousands of separate applications.
  
  They run a single application.
  
  Slack does it.
  
  Notion does it.
  
  Salesforce does it.
  
  Even though millions of users are using the same product, their data remains completely isolated from one another.
  
  This is called **multi-tenant architecture**.
  
  ## The Problem
  
  Imagine you're building a CRM.
  
  Your first customer signs up.
  
  Everything is simple.
  
  You deploy:
  
  \`\`\`text
  Application
  Database
  \`\`\`
  
  Then a second customer arrives.
  
  You could create an entirely separate deployment.
  
  \`\`\`text
  Customer A
   ├─ App
   └─ Database
  
  Customer B
   ├─ App
   └─ Database
  \`\`\`
  
  This is known as **single-tenancy**.
  
  Each customer gets their own application and database.
  
  The isolation is excellent.
  
  The operational overhead is not.
  
  This approach works.
  
  Until customer number 500 arrives.
  
  Now you're maintaining:
  
  - 500 applications
  - 500 databases
  - 500 deployments
  - 500 monitoring pipelines
  
  At that point, the infrastructure becomes harder to manage than the actual product.
  
  ## The Alternative
  
  Instead of creating a new application for every customer, we can allow everyone to share the same system.
  
  \`\`\`text
                Application
                      │
                      ▼
                 Database
                      │
        ┌─────────────┼─────────────┐
        │             │             │
   Tenant A      Tenant B      Tenant C
  \`\`\`
  
  All customers use the same application.
  
  The same servers.
  
  The same deployment.
  
  The same database.
  
  But they only see their own data.
  
  That's the core idea behind **multi-tenancy**.
  
  ## Wait...
  
  If everyone shares the same database, how is the data separated?
  
  The most common approach is to store a tenant identifier on every record.
  
  Consider a patients table.
  
  \`\`\`sql
  id | tenant_id | patient_name
  --------------------------------
  1  | 101       | John
  2  | 101       | Sarah
  3  | 202       | Mike
  4  | 202       | David
  \`\`\`
  
  Whenever a user performs a query, the application automatically filters by tenant.
  
  \`\`\`sql
  SELECT *
  FROM patients
  WHERE tenant_id = 101;
  \`\`\`
  
  Tenant 101 sees only their records.
  
  Tenant 202 sees only theirs.
  
  Everyone uses the same table while remaining logically isolated.
  
  ## Different Ways to Implement Multi-Tenancy
  
  Not all systems separate tenants the same way.
  
  ### 1. Separate Database Per Tenant
  
  Each tenant gets their own database.
  
  \`\`\`text
  Tenant A → Database A
  Tenant B → Database B
  Tenant C → Database C
  \`\`\`
  
  Isolation is excellent.
  
  Operational complexity is not.
  
  Imagine running migrations across 5,000 databases.
  
  ### 2. Separate Schemas
  
  A single database contains multiple schemas.
  
  \`\`\`text
  Database
   ├─ tenant_a
   ├─ tenant_b
   └─ tenant_c
  \`\`\`
  
  This provides stronger isolation while avoiding thousands of database instances.
  
  ### 3. Shared Database, Shared Schema
  
  This is what most SaaS products use.
  
  \`\`\`text
  patients
  appointments
  users
  \`\`\`
  
  Every table contains a tenant identifier.
  
  \`\`\`sql
  tenant_id
  \`\`\`
  
  It's cheaper, simpler, and scales extremely well.
  
  The trade-off is that tenant isolation becomes the application's responsibility.
  
  A missing tenant filter can expose data that should never be visible.
  
  ## Multi-Tenant vs Single-Tenant
  
  A simplified comparison:
  
  | Multi-Tenant | Single-Tenant |
  |-------------|---------------|
  | Lower infrastructure cost | Higher infrastructure cost |
  | Easier deployments | More deployments to manage |
  | Shared resources | Dedicated resources |
  | Higher tenant density | Stronger isolation |
  | More efficient scaling | Easier customization per customer |
  
  Neither approach is universally better.
  
  The right choice depends on the product you're building.
  
  ## Why SaaS Companies Prefer Multi-Tenancy
  
  The biggest reason is efficiency.
  
  Without multi-tenancy:
  
  \`\`\`text
  1000 customers
  =
  1000 deployments
  \`\`\`
  
  With multi-tenancy:
  
  \`\`\`text
  1000 customers
  =
  1 deployment
  \`\`\`
  
  New features are deployed once.
  
  Security patches are deployed once.
  
  Bug fixes are deployed once.
  
  The operational savings are enormous.
  
  ## The Catch
  
  Multi-tenancy introduces a problem commonly known as the **noisy neighbor effect**.
  
  Imagine Tenant A runs a poorly optimized report.
  
  \`\`\`sql
  SELECT *
  FROM appointments
  WHERE ...
  \`\`\`
  
  The query consumes excessive CPU and memory.
  
  Because the infrastructure is shared, Tenant B and Tenant C may also experience slower performance.
  
  One tenant can impact everyone else.
  
  Another issue is blast radius.
  
  In a single-tenant system, an outage affects one customer.
  
  In a multi-tenant system, an outage can affect every customer simultaneously.
  
  The efficiency comes with responsibility.
  
  ## Final Thoughts
  
  Multi-tenancy is one of the main reasons modern SaaS products can scale to thousands of customers without requiring thousands of deployments.
  
  The idea is surprisingly simple:
  
  - Share the infrastructure.
  - Separate the data.
  - Scale the platform.
  
  For most SaaS applications, multi-tenancy is the default choice.
  
  The challenge isn't building the application.
  
  The challenge is making sure Tenant A never realizes Tenant B exists.
  `,
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
