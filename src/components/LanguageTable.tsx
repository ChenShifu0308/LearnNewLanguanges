"use client";
import React from "react";
import TableHeader from "./TableHeader";
import TableRows from "./TableRows";

export default function LanguageTable() {
  return (
    <div className="inline-block w-full h-full overflow-x-visible overflow-y-visible relative">
      <table className="table-fixed">
        <thead>
          <tr>
            <TableHeader />
          </tr>
        </thead>
        <tbody>
          <TableRows />
        </tbody>
      </table>
    </div>
  );
}
