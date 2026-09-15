import { FileText, ArrowRight } from 'lucide-react';
import { Card, CardHeader } from '@/components/ui/card';
import { type AssignedOrder } from '@/features/my-dashboard/types';

interface RecentAssignedOrdersProps {
  orders?: AssignedOrder[];
  onViewAll?: () => void;
}

export function RecentAssignedOrders({
  orders = [],
  onViewAll,
}: RecentAssignedOrdersProps) {
  return (
    <Card className="border border-border/70 bg-card overflow-hidden">
      {/* Header */}
      <CardHeader className="flex flex-row items-center justify-between p-4 sm:p-5 border-b border-border/60">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-sm font-bold text-foreground tracking-tight">
            My Recent Assigned Orders
          </h2>
        </div>

        <button
          onClick={onViewAll}
          className="inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-foreground border border-border/80 bg-muted/40 hover:bg-muted rounded-lg px-3 py-1.5 transition-colors"
        >
          <span>View All</span>
          <ArrowRight className="h-3 w-3" />
        </button>
      </CardHeader>

      {/* Table & Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-border/60 text-muted-foreground font-semibold bg-muted/20 uppercase text-[10px] tracking-wider">
              <th className="py-3 px-5 font-bold">ORDER</th>
              <th className="py-3 px-4 font-bold">TYPE</th>
              <th className="py-3 px-4 font-bold">CLIENT</th>
              <th className="py-3 px-4 font-bold">TOTAL</th>
              <th className="py-3 px-4 font-bold">DEADLINE</th>
              <th className="py-3 px-4 font-bold">REMAINING</th>
              <th className="py-3 px-5 font-bold text-right">STATUS</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan={7} className="py-12 text-center text-xs text-muted-foreground font-medium">
                  No orders assigned to you yet.
                </td>
              </tr>
            ) : (
              orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-border/40 hover:bg-muted/30 transition-colors"
                >
                  <td className="py-3 px-5 font-semibold text-foreground">
                    {order.orderNumber}
                  </td>
                  <td className="py-3 px-4 text-muted-foreground">{order.type}</td>
                  <td className="py-3 px-4 text-foreground">{order.client}</td>
                  <td className="py-3 px-4 font-semibold text-foreground">{order.total}</td>
                  <td className="py-3 px-4 text-muted-foreground">{order.deadline}</td>
                  <td className="py-3 px-4 text-muted-foreground">{order.remaining}</td>
                  <td className="py-3 px-5 text-right font-medium capitalize">
                    <span className="inline-block rounded-md border border-border px-2 py-0.5 text-[10px] font-semibold bg-muted/60">
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
