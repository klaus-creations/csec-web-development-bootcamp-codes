import type { ZodError, ZodIssue } from 'zod';

const formatZodIssue = (issue: ZodIssue): Record<any, any> => {
  const { path: paths, message } = issue;

  const result: Record<any, any> = {};
  let currentLevel = result;
  paths.forEach((path, i) => {
    currentLevel[path] = i === paths?.length - 1 ? message : {};
    currentLevel = currentLevel[path];
  });

  return result;
};

export function formatZodError<T = any>(error: ZodError<T>) {
  const { issues } = error;
  let formattedIssues: Record<any, any> = {};

  if (issues?.length) {
    issues.forEach((issue) => {
      if (issue) {
        formattedIssues = { ...formattedIssues, ...formatZodIssue(issue) };
      }
    });
    return formattedIssues;
  }
  return issues;
}
