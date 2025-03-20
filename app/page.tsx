"use client";
import { useEffect } from "react";
import { ApplicationContent } from "./components/shared/applicatons/application-content";
import { Container } from "./components/shared/reuses-components/container";
import { clientApi } from "./services/api-client";
import Cookies from "js-cookie";
import React from "react";
import { taskStore } from "./store/tasks-store";
import { statusesStore } from "./store/statuses-store";
import { usersStore } from "./store/users-store";

const HomePage = () => {
  const tasksStore = taskStore((state) => state);
  useEffect(() => {
    const fetchAndSetTenantGuid = async () => {
      let id = Cookies.get("tenantGuid");
      if (!id) {
        id = await clientApi.tenantguid.getTenantGuid();
        Cookies.set("tenantGuid", id, { expires: 1 });
      }
      console.log(id);

      tasksStore.fetchTasks(id);
    };

    fetchAndSetTenantGuid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const statusStore = statusesStore((state) => state);
  React.useEffect(() => {
    const fetchAndSetTenantGuid = async () => {
      const id = Cookies.get("tenantGuid");
      if (id) {
        statusStore.fetchStatuses(id);
      }
    };

    fetchAndSetTenantGuid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const userStore = usersStore((state) => state);
  React.useEffect(() => {
    const fetchAndSetTenantGuid = async () => {
      const id = Cookies.get("tenantGuid");
      if (id) {
        userStore.fetchUsers(id);
      }
    };

    fetchAndSetTenantGuid();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

console.log(tasksStore.tasks);

  return (
    <>
      <Container>
        <ApplicationContent
          loading={tasksStore.loading}
          tasks={tasksStore.tasks}
        />
      </Container>
    </>
  );
};

export default HomePage;
