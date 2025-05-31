// src/app/dashboard/page.tsx

async function getData() {
  await new Promise(resolve => setTimeout(resolve, 3000)); // 3s delay
  return 'Dashboard content loaded!';
}

export default async function DashboardPage() {
  const data = await getData();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>{data}</p>
    </div>
  );
}
