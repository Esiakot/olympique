"use client";

import React from "react";
import Header from "@/components/Common/Header";
import MatchDetail from "@/components/Match/MatchDetail";
import styles from "./page.module.css";

export default function MatchDetailPage() {
  return (
    <div className={styles.page}>
      <Header />
      <MatchDetail />
    </div>
  );
}
