import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";
import { Card, CardHeader, CardBody, Divider, Button } from "@heroui/react";
const DashboardContent = () => {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex flex-col gap-4">
				<div className="text-2xl font-bold">Good day, James!</div>
				<div>Let's see how your company is doing today.</div>
			</div>
			<div>
				<Card className="w-full bg-white rounded-lg shadow-l">
					<CardHeader className="flex gap-3">
						<p className="text-md">Orders with Appointment Today</p>
					</CardHeader>
					<Divider />
					<CardBody>
						<div className="flex flex-col gap-4 items-center justify-between p-4">
							<div>
								<ClipboardDocumentIcon className="size-16 text-gray-500" />
							</div>
							<div>
								<p>No orders with appointments today</p>
								<p className="text-sm text-gray-500">
									Looks like you don't have anything scheduled today.
								</p>
							</div>
							<div>
								<Button color="secondary">View All Orders</Button>
							</div>
						</div>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};

export default DashboardContent;
