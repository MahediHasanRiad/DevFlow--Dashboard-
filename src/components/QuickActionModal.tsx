import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FolderPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const schema = yup.object().shape({
  projectName: yup.string().required('Project name is required').min(3, 'Must be at least 3 characters'),
  environment: yup.string().required('Environment is required'),
  description: yup.string().max(200, 'Max 200 characters').optional(),
  teamLead: yup.string().required('Lead engineer is required'),
});

type FormData = yup.InferType<typeof schema>;

interface QuickActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (data: FormData) => void;
}

export function QuickActionModal({ isOpen, onClose, onSuccess }: QuickActionModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      projectName: '',
      environment: 'production',
      description: '',
      teamLead: 'Alex Rivera',
    },
  });

  const onSubmit = (data: FormData) => {
    if (onSuccess) {
      onSuccess(data);
    }
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="relative w-full max-w-lg rounded-2xl border border-border bg-card p-6 shadow-2xl z-10"
          >
            <div className="flex items-center justify-between pb-4 border-b border-border/80">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FolderPlus className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-foreground">Create New Service</h2>
                  <p className="text-xs text-muted-foreground">Add a new microservice or project cluster</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="h-8 w-8 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">Project / Service Name</label>
                <Input
                  placeholder="e.g. Authentication Microservice"
                  {...register('projectName')}
                  className={errors.projectName ? 'border-destructive focus-visible:ring-destructive' : ''}
                />
                {errors.projectName && (
                  <p className="text-[11px] text-destructive">{errors.projectName.message}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-foreground">Environment</label>
                  <select
                    {...register('environment')}
                    className="flex h-9 w-full rounded-lg border border-input bg-card px-3 py-1 text-xs shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground"
                  >
                    <option value="production">Production</option>
                    <option value="staging">Staging</option>
                    <option value="development">Development</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-foreground">Lead Engineer</label>
                  <select
                    {...register('teamLead')}
                    className="flex h-9 w-full rounded-lg border border-input bg-card px-3 py-1 text-xs shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground"
                  >
                    <option value="Alex Rivera">Alex Rivera</option>
                    <option value="Elena Rostova">Elena Rostova</option>
                    <option value="Marcus Chen">Marcus Chen</option>
                    <option value="Sarah Jenkins">Sarah Jenkins</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-foreground">Description (Optional)</label>
                <textarea
                  placeholder="Brief summary of service objectives..."
                  rows={2}
                  {...register('description')}
                  className="flex w-full rounded-lg border border-input bg-card px-3 py-2 text-xs shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-foreground resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-3 border-t border-border/80">
                <Button type="button" variant="outline" size="sm" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" size="sm" disabled={isSubmitting}>
                  {isSubmitting ? 'Creating...' : 'Create Project'}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
