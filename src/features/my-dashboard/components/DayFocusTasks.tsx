import React, { useState } from 'react';
import { Star, FileText, CheckCircle2, Circle, Trash2 } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { type DayTask } from '@/features/my-dashboard/types';

interface DayFocusTasksProps {
  initialTasks?: DayTask[];
  onTaskAdded?: (task: DayTask) => void;
}

export function DayFocusTasks({ initialTasks = [], onTaskAdded }: DayFocusTasksProps) {
  const [tasks, setTasks] = useState<DayTask[]>(initialTasks);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!taskInput.trim()) return;

    const newTask: DayTask = {
      id: Date.now().toString(),
      text: taskInput.trim(),
      completed: false,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updated = [newTask, ...tasks];
    setTasks(updated);
    setTaskInput('');
    if (onTaskAdded) onTaskAdded(newTask);
  };

  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <Card className="relative overflow-hidden border border-border/70 bg-card p-5">
      {/* Amber left accent border highlight */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 rounded-l" />

      {/* Header */}
      <div className="flex items-start justify-between pb-3">
        <div className="space-y-0.5">
          <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
            <span>Day Focus</span>
          </div>
          <p className="text-[11px] text-muted-foreground font-medium">
            My tasks for today
          </p>
        </div>
      </div>

      {/* Subheader */}
      <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground pt-2 pb-2.5">
        <FileText className="h-3.5 w-3.5" />
        <span>MY TASKS FOR TODAY</span>
      </div>

      {/* Task input form */}
      <form onSubmit={handleAddTask} className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="What do you need to do today?"
          className="flex-1 h-9 rounded-xl border border-border/80 bg-muted/40 px-3.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-colors"
        />
        <Button
          type="submit"
          size="sm"
          className="h-9 px-4 bg-[#6366f1] hover:bg-[#4f46e5] text-white text-xs font-semibold rounded-xl"
        >
          + Add
        </Button>
      </form>

      {/* Task list or Empty state */}
      {tasks.length === 0 ? (
        <div className="py-8 text-center text-xs text-muted-foreground italic font-medium">
          No tasks added yet. Type a task above and press Enter.
        </div>
      ) : (
        <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between rounded-lg border border-border/50 bg-muted/20 px-3 py-2 text-xs group hover:bg-muted/40 transition-colors"
            >
              <div
                onClick={() => toggleTask(task.id)}
                className="flex items-center gap-2.5 flex-1 cursor-pointer"
              >
                {task.completed ? (
                  <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                ) : (
                  <Circle className="h-4 w-4 text-muted-foreground/60 shrink-0 group-hover:text-primary" />
                )}
                <span
                  className={
                    task.completed
                      ? 'line-through text-muted-foreground'
                      : 'text-foreground font-medium'
                  }
                >
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive p-1 transition-opacity"
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
