"use client";

const ThreeDRotation = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center [perspective:900px]">

      <div className="relative h-[300px] w-[300px] [transform-style:preserve-3d]">


        <div className="box box1">
          1
        </div>


        <div className="box box2">
          2
        </div>


        <div className="box box3">
          3
        </div>


      </div>


      <style jsx>{`

        .box{

          width:120px;
          height:120px;

          position:absolute;

          left:50%;
          top:50%;

          transform-style:preserve-3d;

          display:flex;
          justify-content:center;
          align-items:center;

          font-size:25px;
          color:white;

          background:red;

          border:2px solid white;

          border-radius:20px;

          box-shadow:
          0 20px 50px rgba(0,0,0,.5);

        }



        .box1{
          animation:move1 6s infinite cubic-bezier(.65,0,.35,1);
        }


        .box2{
          animation:move2 6s infinite cubic-bezier(.65,0,.35,1);
        }


        .box3{
          animation:move3 6s infinite cubic-bezier(.65,0,.35,1);
        }




        @keyframes move1{

          0%,100%{

            transform:
            translate(-50%,-50%)
            rotateY(75deg)
            translateZ(-120px);

          }


          20%,35%{

            transform:
            translate(-50%,-50%)
            rotateY(0deg)
            translateZ(180px);

          }


          55%,70%{

            transform:
            translate(-50%,-50%)
            rotateY(-75deg)
            translateZ(-120px);

          }

        }





        @keyframes move2{


          0%,100%{

            transform:
            translate(-50%,-50%)
            rotateY(-75deg)
            translateZ(-120px);

          }


          20%,35%{

            transform:
            translate(-50%,-50%)
            rotateY(75deg)
            translateZ(-120px);

          }


          55%,70%{

            transform:
            translate(-50%,-50%)
            rotateY(0deg)
            translateZ(180px);

          }

        }





        @keyframes move3{


          0%,100%{

            transform:
            translate(-50%,-50%)
            rotateY(0deg)
            translateZ(180px);

          }


          20%,35%{

            transform:
            translate(-50%,-50%)
            rotateY(-75deg)
            translateZ(-120px);

          }


          55%,70%{

            transform:
            translate(-50%,-50%)
            rotateY(75deg)
            translateZ(-120px);

          }

        }


      `}</style>


    </div>
  );
};


export default ThreeDRotation;