import React from 'react';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from './ui/form';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

function FollowUpForm({ followUpForm, handleConversationSubmit, conversationHistory }) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Ask AI more questions</h3>

      <Form {...followUpForm}>
        <form onSubmit={followUpForm.handleSubmit(handleConversationSubmit)} className="space-y-4">
          <FormField
            control={followUpForm.control}
            name="userInput"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ask AI</FormLabel>
                <FormControl>
                  <Textarea placeholder="Ask a follow-up question..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Ask AI</Button>
        </form>
      </Form>

      {/* Display conversation */}
      <div className="mt-4 space-y-4">
        {conversationHistory.map((chat, index) => (
          <div key={index}>
            <p><strong>{chat.role === 'user' ? 'You' : 'AI'}:</strong> {chat.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FollowUpForm;
