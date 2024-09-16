import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table.jsx';

function QuestionTable({ questions }) {
  return (
    <Table>
      <TableCaption>List of Available Questions</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Question Text</TableHead>
          <TableHead>Correct Answer</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {questions.map((question) => (
          <TableRow key={question._id}>
            <TableCell className="font-medium">{question._id}</TableCell>
            <TableCell>{question.text}</TableCell>
            <TableCell>{question.correctAnswer}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default QuestionTable;
