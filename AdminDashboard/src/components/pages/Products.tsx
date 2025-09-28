import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const products = [
  {
    name: 'Wireless Headphones',
    status: 'Active',
    price: '$99.99',
    stock: 120,
    sales: 1500,
  },
  {
    name: 'Smart Watch',
    status: 'Active',
    price: '$199.99',
    stock: 80,
    sales: 2500,
  },
  {
    name: 'Bluetooth Speaker',
    status: 'Draft',
    price: '$49.99',
    stock: 200,
    sales: 500,
  },
  {
    name: 'Laptop Sleeve',
    status: 'Archived',
    price: '$29.99',
    stock: 0,
    sales: 100,
  },
];

const Products = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <Button>Add Product</Button>
      </div>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Sales</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.name}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>
                    <Badge variant={product.status === 'Active' ? 'default' : 'outline'}>
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>{product.sales}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Products;