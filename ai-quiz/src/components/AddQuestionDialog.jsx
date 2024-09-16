import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';

function AddQuestionDialog({ addQuestionForm, handleAddQuestion }) {
  const [open, setOpen] = useState(false);  // State to manage dialog open/close

  const handleSubmit = async (data) => {
    await handleAddQuestion(data);  // Call the add question function passed as a prop
    setOpen(false);  // Close the modal after successful submission
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Add New Question</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a New Question</DialogTitle>
          <DialogDescription>Fill in the question details below.</DialogDescription>
        </DialogHeader>

        <Form {...addQuestionForm}>
          <form onSubmit={addQuestionForm.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={addQuestionForm.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Question Text</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter question text" {...field} />
                  </FormControl>
                  <FormDescription>This is the question that will be displayed to users.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addQuestionForm.control}
              name="correctAnswer"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correct Answer</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter the correct answer" {...field} />
                  </FormControl>
                  <FormDescription>This is the answer that will be used to evaluate user responses.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Add Question</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddQuestionDialog;
