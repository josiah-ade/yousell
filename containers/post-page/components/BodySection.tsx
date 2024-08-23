import ListingImageUpload from "@/components/ImageUpload/ListingImages";
import FullPageLoader from "@/components/PageLoader/FullPage";
import SelectReact from "@/components/Select/ReactSelect";
import Toast from "@/components/Toastify/error";
import { options, optionsCondition, optionsYesNo, stateLocation } from "@/constants/Select";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import * as NProgress from "nprogress";
import { FormEvent, useEffect, useRef, useState } from "react";
import Mobile from "./CategoryComponent/Mobile";
import RealEstate from "./CategoryComponent/RealEstate";

function BodySection() {
  const router = useRouter();
  const [showForm, setShowForm] = useState<boolean>(true);
  const [showUploadCompo, setShowUploadCompo] = useState<boolean>(false);
  const [showLoading, setShowLoading] = useState<boolean>(false);
  const [category, setCategory] = useState<string>("");
  const [categoryIn, setcategoryIn] = useState<boolean>(false);
  const [categoryValue, setCategoryValue] = useState<string>("");
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastType, setToastType] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string>("");
  const [isReady, setIsReady] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<string>("");

  const formRef = useRef<HTMLFormElement>(null);
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isReady && formRef.current) {
      const event = new Event("submit", { cancelable: true, bubbles: true });
      formRef.current.dispatchEvent(event);
    }
  }, [isReady]);

  const handlePush = (link: string) => {
    NProgress.start();
    router.replace(link);
  };
  const showCompoTrue = () => {
    if (divRef.current) {
      divRef.current.style.display = "flex";
    }
    setShowUploadCompo(false);
  };

  const showCompoFalse = () => {
    if (divRef.current) {
      divRef.current.style.display = "none";
    }
    setShowUploadCompo(true);
  };

  const handleChange = (value: string) => {
    setCategoryValue(value);
    setcategoryIn(true);
  };

  const fetchType = (type: string) => {
    if (type === "real-estate") return <RealEstate />;
    if (type === "mobile") return <Mobile />;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    let formObject = Object.fromEntries(formData.entries());
    if (isReady) {
      setShowLoading(true);
      axios
        .post(
          "/api/listings/add",
          {
            data: formObject,
            categoryValue: categoryValue,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + Cookies.get("token"),
            },
          }
        )
        .then((response) => {
          const data = response.data;
          if (data.statusCode == 1) {
            handlePush("/");
          } else {
            handlePush("/login");
          }
          setShowLoading(false);
        })
        .catch((err) => {
          setShowToast(true);
          setToastType("error");
          setToastMessage("Error please try again later");
          setShowLoading(false);
        });
    } else {
      showCompoFalse();
      console.log("not ready");
    }
  };

  const updateState = (value: string, status: boolean) => {
    if (status) {
      setImageUrl(value);
      setIsReady(true);
      showCompoTrue();
    }
  };

  return (
    <div className="card">
      <Toast type={toastType} message={toastMessage} showToast={showToast} />
      <form onSubmit={handleSubmit} ref={formRef}>
        <Grid container spacing={2} ref={divRef} style={{ display: "flex" }}>
          <Grid xs={12}>
            <div className="post__page__overview__div">
              <h5>Listing Information</h5>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={8} lg={8}>
            <div className="form__body mgb-10">
              <label>
                Title <sup>*</sup>
              </label>
              <input
                type="text"
                name="title"
                className="form-input mgt-10"
                placeholder="Title"
              />
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4}>
            <div className="form__body mgb-10">
              <label>
                Price <sup>*</sup>
              </label>
              <input
                type="number"
                name="price"
                className="form-input mgt-10"
                placeholder="Price"
              />
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4}>
            <div className="form__body mgb-10">
              <label>
                Category <sup>*</sup>
              </label>
              <SelectReact
               
                options={options}
                title="Category"
                name="category"
                // defaultValue={category}
                required
                onChange={(e) =>
                  handleChange((e.target as HTMLSelectElement).value)
                }
              />
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4}>
            <div className="form__body mgb-10">
              <label>
                State <sup>*</sup>
              </label>
              {/* <input
                type="text"
                name="state"
                className="form-input mgt-10"
                placeholder="State"
              /> */}
              <SelectReact
                options={stateLocation}
                title="State"
                name="state"
                required
              />
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={4} lg={4}>
            <div className="form__body mgb-10">
              <label>
                City <sup>*</sup>
              </label>
              <input
                type="text"
                name="city"
                className="form-input mgt-10"
                placeholder="City"
              />
            </div>
          </Grid>

          {categoryIn && fetchType(categoryValue)}

          <Grid xs={12}>
            <div className="form__body mgb-10">
              <label>
                Description <sup>*</sup>
              </label>
              <textarea
                className="form-control mgt-10"
                placeholder="Description"
                name="description"
                rows={7}
                required
              ></textarea>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={6} lg={6}>
            <div className="form__body mgb-10">
              <label>
                Condition <sup>*</sup>
              </label>
              <SelectReact
                options={optionsCondition}
                title="Condition"
                name="condition"
                required
              />
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={6} lg={6}>
            <div className="form__body mgb-10">
              <label>
                Negotiable <sup>*</sup>
              </label>
              <SelectReact
                
                options={optionsYesNo}
                title="Negotiable"
                name="negotiable"
                required
              />
              <input type="hidden" name="images" value={imageUrl} />
              <input type="hidden" name="listingStatus" value={1} />
              <input
                type="hidden"
                name="postedBy"
                value={Cookies.get("userID")}
              />
              <input type="hidden" name="postView" value={0} />
            </div>
          </Grid>
          <Grid xs={12}>
            <button className="btn_sm w-100 d-flex2" type="submit">
              <ArrowUpwardIcon />
              Proceed
            </button>
          </Grid>
        </Grid>
        {showUploadCompo && <ListingImageUpload updateState={updateState} />}
      </form>
      {showLoading && <FullPageLoader />}
    </div>
  );
}

export default BodySection;
