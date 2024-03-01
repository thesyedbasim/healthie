import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/card';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Reminder } from '../page';

export default function ReminderCard({
  id,
  medicineName,
  medicineTimestamp,
}: Reminder) {
  return (
    <Card className="grid grid-flow-row gap-0">
      <CardHeader>
        <CardTitle className="text-lg flex justify-between items-start">
          {medicineName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{medicineTimestamp}</CardDescription>
      </CardContent>
    </Card>
  );
}
