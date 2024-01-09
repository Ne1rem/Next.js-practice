import ClientComponent from "./components/client-component";
import ServerComponent from "./components/server-component";
import StatusLabel, { Status } from "./components/status-label";

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <StatusLabel status={Status.Active} disabled={false}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive} disabled={false}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending} disabled={true}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended} disabled={true}>Suspended</StatusLabel>
      <ServerComponent/>
      <ClientComponent/>
    </main>
  );
}
