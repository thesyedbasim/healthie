import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { createNewJournal } from './actions';
import { Textarea } from '@/components/ui/textarea';

export default function JournalNewPage() {
  return (
    <div className="">
      <Card>
        <CardHeader>
          <h1 className="font-extrabold text-3xl mb-4">
            Add new health record
          </h1>
        </CardHeader>
        <CardContent>
          <form
            id="new-journal-form"
            className="space-y-4"
            action={createNewJournal}
          >
            <div className="space-y-1">
              <Label htmlFor="hospital-name">Hospital name</Label>
              <Input
                id="hospital-name"
                name="hospitalName"
                placeholder="Manipal"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="location">Location</Label>
              <Input id="location" name="location" placeholder="Hebbal" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="doctor-name">Doctor</Label>
              <Input
                id="doctor-name"
                name="doctorName"
                placeholder="Dr. Krishnamurthi"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="doctor-specialization">
                Doctor specialization in
              </Label>
              <Input
                id="doctor-specialization"
                name="doctorSpecialization"
                placeholder="Cardiologist"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="amount">Amount</Label>
              <Input id="amount" name="amount" placeholder="3000" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="advice">Advice</Label>
              <Textarea
                id="advice"
                name="advice"
                placeholder="Write what you discussed with your doctor"
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" form="new-journal-form" className="w-full">
            Add
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
