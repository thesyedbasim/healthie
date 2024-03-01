'use client';

import { createNewJournal } from '@/app/journals/new/actions';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { FormDescription } from '@/components/ui/form';
import { saveMealTimings } from './actions';
import { useState } from 'react';

export default function MealTimingsPage() {
  const [breakfastTime, setBreakfastTime] = useState('');
  const [lunchTime, setLunchTime] = useState('');
  const [dinnerTime, setDinnerTime] = useState('');

  async function handleSubmit() {
    localStorage.setItem(
      'mealTimings',
      JSON.stringify({
        breakfastTime: breakfastTime || '8:00',
        lunchTime: lunchTime || '12:00',
        dinnerTime: dinnerTime || '20:00',
      })
    );

    await saveMealTimings();
  }

  return (
    <Card>
      <CardHeader>
        <h1 className="font-extrabold text-3xl mb-4">Edit your meal timings</h1>
      </CardHeader>
      <CardContent>
        <form
          id="meal-timings-form"
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div className="space-y-1">
            <Label htmlFor="breakfast-time">Breakfast time (24hrs)</Label>
            <Input
              id="breakfast-time"
              name="breakfastTime"
              placeholder="8:00"
              value={breakfastTime}
              onChange={(e) => setBreakfastTime(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="lunch-time">Lunch time (24hrs)</Label>
            <Input
              id="lunch-time"
              name="lunchTime"
              placeholder="13:00"
              value={lunchTime}
              onChange={(e) => setLunchTime(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="dinner-time">Dinner time (24hrs)</Label>
            <Input
              id="dinner-time"
              name="dinnerTime"
              placeholder="20:00"
              value={dinnerTime}
              onChange={(e) => setDinnerTime(e.target.value)}
            />
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" form="meal-timings-form" className="w-full">
          Save
        </Button>
      </CardFooter>
    </Card>
  );
}
