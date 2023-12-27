import StudentNav from "../../components/navbar/StudentNav";

const StudentLayout = ({ children }: any) => {
  return (
    <div>
      <StudentNav />
      {children}
    </div>
  );
};

export default StudentLayout;
