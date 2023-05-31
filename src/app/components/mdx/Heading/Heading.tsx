import { Heading } from "@chakra-ui/react";

export const H1 = (children: React.ReactNode) => {
  return (
    <Heading as="h2" size="2xl" noOfLines={1}>
      {children}
    </Heading>
  );
};

export const H2 = (children: React.ReactNode) => {
  return (
    <Heading as="h2" size="xl">
      {children}
    </Heading>
  );
};

export const H3 = (children: React.ReactNode) => {
  return (
    <Heading as="h3" size="lg">
      {children}
    </Heading>
  );
};
export const H4 = (children: React.ReactNode) => {
  return (
    <Heading as="h4" size="md">
      {children}
    </Heading>
  );
};
export const H5 = (children: React.ReactNode) => {
  return (
    <Heading as="h5" size="sm">
      {children}
    </Heading>
  );
};
export const H6 = (children: React.ReactNode) => {
  return (
    <Heading as="h6" size="xs">
      {children}
    </Heading>
  );
};
